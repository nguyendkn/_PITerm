import { STRING, INTEGER, DATE, NOW } from 'sequelize'
import { database } from '@/configs/database'
import { randomBytes } from 'crypto'

const Session = database.define(
	'sessions',
	{
		accountId: {
			type: INTEGER,
			allowNull: false
		},
		token: {
			type: STRING,
			defaultValue: () => randomBytes(48).toString('hex')
		},
		ip: {
			type: STRING,
			allowNull: false
		},
		userAgent: {
			type: STRING,
			allowNull: false
		},
		lastActivity: {
			type: DATE,
			defaultValue: NOW
		}
	},
	{ freezeTableName: true, createdAt: false, updatedAt: false }
)

export default Session
