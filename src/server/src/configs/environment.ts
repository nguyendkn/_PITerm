import dotenv, { DotenvConfigOutput } from 'dotenv'

const nodeEnv = process.env.NODE_ENV || 'DEVELOPMENT'

type TEnvironment = {
	env: DotenvConfigOutput
	host: string
	port: number
	origins: string[]
}

export const environment: TEnvironment = {
	env: dotenv.config(),
	host: get('HOST') || 'localhost',
	port: Number(get('PORT')) || 3001,
	origins: get('ORIGINS').split(';')
}

function get(key: string) {
	return process.env[[nodeEnv, key].join('_')] as string
}
