import dotenv, { DotenvConfigOutput } from 'dotenv'
import { Dialect } from 'sequelize'

const nodeEnv = process.env.NODE_ENV || 'DEVELOPMENT'

type TEnvironment = {
	env: DotenvConfigOutput
	host: string
	port: number
	origins: string[]
	database: {
		dialect: Dialect
		host: string
		name: string
		user: string
		pass: string
	}
}

export const environment: TEnvironment = {
	env: dotenv.config(),
	host: get('HOST') || 'localhost',
	port: Number(get('PORT')) || 3001,
	origins: get('ORIGINS').split(';'),
	database: {
		dialect: 'postgres',
		host: get('DATABASE_HOST'),
		name: get('DATABASE_NAME'),
		user: get('DATABASE_USER'),
		pass: get('DATABASE_PASS')
	}
}

function get(key: string) {
	return process.env[[nodeEnv, key].join('_')] as string
}
