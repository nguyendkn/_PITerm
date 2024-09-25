import { genSalt, hash } from 'bcrypt'
import Account from '../models/Account'
import Folder from '../models/Folder'
import Identity from '../models/Identity'
import Server from '../models/Server'
import Session from '../models/Session'
import PVEServer from '../models/PVEServer'
import { injectable } from 'inversify'

interface AccountConfiguration {
	username: string
	password: string
	firstName?: string
	lastName?: string
}

@injectable()
export class AccountController {
	createAccount = async (
		configuration: AccountConfiguration,
		firstTimeSetup: boolean = true
	) => {
		if ((await Account.count()) > 0 && firstTimeSetup) {
			return { code: 104, message: 'First time setup is already completed' }
		}

		const account = await Account.findOne({
			where: { username: configuration.username }
		})

		if (account !== null) {
			return { code: 101, message: 'This account already exists' }
		}

		// Hash the password
		const salt = await genSalt(10)
		const password = await hash(configuration.password, salt)

		// Create the account
		await Account.create({
			...configuration,
			password,
			role: firstTimeSetup ? 'admin' : 'user'
		})
	}

	deleteAccount = async (id: number) => {
		const account = await Account.findByPk(id)

		if (account === null) {
			return { code: 102, message: 'The provided account does not exist' }
		}

		if (
			(await Account.count({ where: { role: 'admin' } })) === 1 &&
			account.role === 'admin'
		) {
			return { code: 106, message: 'You cannot delete the last admin account' }
		}

		// Delete all related data
		await Folder.destroy({ where: { accountId: id } })
		await Identity.destroy({ where: { accountId: id } })
		await Server.destroy({ where: { accountId: id } })
		await Session.destroy({ where: { accountId: id } })
		await PVEServer.destroy({ where: { accountId: id } })

		await Account.destroy({ where: { id } })
	}

	updateName = async (id: number, configuration: { name: string | null }) => {
		const account = await Account.findByPk(id)

		const { name } = configuration

		if (name === null) {
			return {
				code: 105,
				message: 'You must provide either a name'
			}
		}

		if (account === null) {
			return { code: 102, message: 'The provided account does not exist' }
		}

		await Account.update({ name }, { where: { id } })
	}

	updatePassword = async (id: number, password: string) => {
		const account = await Account.findByPk(id)

		if (account === null) {
			return { code: 102, message: 'The provided account does not exist' }
		}

		const salt = await genSalt(10)
		const hashedPassword = await hash(password, salt)

		await Account.update({ password: hashedPassword }, { where: { id } })
	}

	updateRole = async (id: number, role: string) => {
		const account = await Account.findByPk(id)

		if (account === null) {
			return { code: 102, message: 'The provided account does not exist' }
		}

		if (role === account.role) {
			return {
				code: 107,
				message: 'The provided role is the same as the current role'
			}
		}

		if (role !== 'admin' && role !== 'user') {
			return { code: 108, message: 'The provided role is invalid' }
		}

		await Account.update({ role }, { where: { id } })
	}

	updateTOTP = async (id: number, status: boolean) => {
		const account = await Account.findByPk(id)

		if (account === null) {
			return { code: 102, message: 'The provided account does not exist' }
		}

		if (account.totpEnabled === status) {
			return {
				code: 103,
				message: `TOTP is already ${
					status ? 'enabled' : 'disabled'
				} on your account`
			}
		}

		const updater = { totpEnabled: status } as any
		await Account.update(updater, { where: { id } })
	}

	getFTSStatus = async () => {
		return (await Account.count()) === 0
	}

	users = async () => {
		return await Account.findAll({
			attributes: { exclude: ['password', 'totpSecret'] }
		})
	}
}
