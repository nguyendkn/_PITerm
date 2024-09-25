import('reflect-metadata')
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import { environment } from './configs/environment'

dotenv.config()
const app = express()
const service = {
	name: 'console',
	environment
}
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(morgan('dev'))
app.use(helmet())
app.use(
	cors({
		origin: function (origin, callback) {
			if (service.environment.origins.indexOf(origin as string) !== -1) {
				callback(null, true)
			} else {
				callback(null, false)
			}
		},
		credentials: true
	})
)

app.listen(service.environment.port, () => {
	console.log(
		`[ ready ] ...://${service.environment.host}:${service.environment.port}`
	)
})
