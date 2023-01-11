import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadUsersController } from '../factories/presentation'

export default (router: Router): void => {
  router.get('/users', adaptRoute(makeLoadUsersController()))
}
