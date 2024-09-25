import { ModelAttributes, DataTypes, Model } from 'sequelize'
import { database } from '@/configs/database'
import { generateSecret } from 'speakeasy'

interface IAccount
	extends Model<ModelAttributes<IAccount>, Partial<ModelAttributes<IAccount>>> {
	name: string
	username: string
	password: string
	totpEnabled: boolean
	role: string
	totpSecret: string
}

const Account = database.define<IAccount>(
	'accounts',
	{
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		totpEnabled: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		role: {
			type: DataTypes.STRING,
			defaultValue: 'user'
		},
		totpSecret: {
			type: DataTypes.STRING,
			defaultValue: () => {
				return generateSecret({ name: 'Nexterm' }).base32
			}
		}
	},
	{ freezeTableName: true, createdAt: false, updatedAt: false }
)

export default Account
