import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadClientsController } from '../factories/presentation'

export default (router: Router): void => {
  router.get('/clients', adaptRoute(makeLoadClientsController()))
}
