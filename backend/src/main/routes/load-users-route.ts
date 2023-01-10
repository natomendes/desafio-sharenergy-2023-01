import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadUsersController } from '../factories/presentation/load-users-controller-factory'

export default (router: Router): void => {
  router.get('/load-users', adaptRoute(makeLoadUsersController()))
}
