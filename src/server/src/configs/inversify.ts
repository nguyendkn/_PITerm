import { Container } from 'inversify'
import { AccountController } from '@/controllers/account.controller'

const container = new Container({
	defaultScope: 'Singleton'
})

container.bind(AccountController).toSelf()

export { container }
