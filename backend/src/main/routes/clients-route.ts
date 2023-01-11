import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeLoadClientsController, makeAddClientController, makeUpdateClientController, makeDeleteClientController } from '../factories/presentation'

export default (router: Router): void => {
  router.get('/clients', adaptRoute(makeLoadClientsController()))
  router.post('/clients', adaptRoute(makeAddClientController()))
  router.put('/clients', adaptRoute(makeUpdateClientController()))
  router.delete('/clients', adaptRoute(makeDeleteClientController()))
}
