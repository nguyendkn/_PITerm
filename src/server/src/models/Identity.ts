import { STRING, INTEGER } from 'sequelize'
import { database } from '@/configs/database'

const Identity = database.define(
	'identities',
	{
		name: {
			type: STRING,
			allowNull: false
		},
		accountId: {
			type: INTEGER,
			allowNull: false
		},
		username: {
			type: STRING,
			allowNull: true
		},
		type: {
			type: STRING,
			allowNull: false
		},
		password: {
			type: STRING,
			allowNull: true
		},
		sshKey: {
			type: STRING,
			allowNull: true
		},
		passphrase: {
			type: STRING,
			allowNull: true
		}
	},
	{ freezeTableName: true, createdAt: false, updatedAt: false }
)

export default Identity
