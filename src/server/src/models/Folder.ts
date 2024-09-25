import { STRING, INTEGER } from 'sequelize'
import { database } from '@/configs/database'

const Folder = database.define(
	'folders',
	{
		name: {
			type: STRING,
			allowNull: false
		},
		accountId: {
			type: INTEGER,
			allowNull: false
		},
		parentId: {
			type: INTEGER,
			allowNull: true
		}
	},
	{ freezeTableName: true, createdAt: false, updatedAt: false }
)

export default Folder
