import { STRING, INTEGER, BOOLEAN, JSON } from 'sequelize'
import { database } from '@/configs/database'

const PVEServer = database.define(
	'pve_servers',
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
		ip: {
			type: STRING,
			allowNull: false
		},
		port: {
			type: INTEGER,
			allowNull: false
		},
		username: {
			type: STRING,
			allowNull: false
		},
		password: {
			type: STRING,
			allowNull: false
		},
		online: {
			type: BOOLEAN,
			defaultValue: false
		},
		resources: {
			type: JSON,
			defaultValue: []
		}
	},
	{ freezeTableName: true, createdAt: false, updatedAt: false }
)

export default PVEServer
