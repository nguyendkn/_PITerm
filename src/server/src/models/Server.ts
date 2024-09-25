import { STRING, INTEGER, JSON } from 'sequelize'
import { database } from '@/configs/database'

const Server = database.define(
	'servers',
	{
		name: {
			type: STRING,
			allowNull: false
		},
		accountId: {
			type: INTEGER,
			allowNull: false
		},
		folderId: {
			type: INTEGER,
			allowNull: false
		},
		icon: {
			type: STRING,
			allowNull: true
		},
		protocol: {
			type: STRING,
			allowNull: false
		},
		ip: {
			type: STRING,
			allowNull: false
		},
		port: {
			type: INTEGER,
			allowNull: false
		},
		identities: {
			type: JSON,
			defaultValue: []
		}
	},
	{ freezeTableName: true, createdAt: false, updatedAt: false }
)

export default Server
