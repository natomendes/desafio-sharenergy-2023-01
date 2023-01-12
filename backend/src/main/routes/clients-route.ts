import { Router } from 'express'
import { adaptMiddleware } from '../adapters/express-middleware-adapter'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadClientsController, makeAddClientController, makeUpdateClientController, makeDeleteClientController, makeAuthMiddleware } from '../factories/presentation'

export default (router: Router): void => {
  router.get('/clients', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeLoadClientsController()))
  router.post('/clients', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeAddClientController()))
  router.put('/clients', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeUpdateClientController()))
  router.delete('/clients', adaptMiddleware(makeAuthMiddleware()), adaptRoute(makeDeleteClientController()))
}
