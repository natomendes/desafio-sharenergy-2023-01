import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeAuthMiddleware, makeLoadUsersController } from '../factories/presentation'

export default (router: Router): void => {
  router.post('/users', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeLoadUsersController()))
}
