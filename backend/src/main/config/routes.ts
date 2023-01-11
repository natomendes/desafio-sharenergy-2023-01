import { Express, Router } from 'express'
import { clientsRoute, usersRoute, loginRoute } from '../routes'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)

  loginRoute(router)
  usersRoute(router)
  clientsRoute(router)
}
