import { Sequelize, DATE } from 'sequelize'
import { environment } from './environment'
;(DATE.prototype as any)._stringify = (): string => {
	return new Date().toISOString()
}

if (!process.env.DB_NAME || !process.env.DB_PASS || !process.env.DB_USER) {
	throw new Error('Missing database environment variables')
}

const database = new Sequelize(
	environment.database.name,
	environment.database.user,
	environment.database.pass,
	{
		host: process.env.DB_HOST || 'localhost',
		dialect: environment.database.dialect,
		logging: false,
		query: { raw: true }
	}
)

export { database }
