import { Express, Router } from 'express'
import loadUsersRoute from '../routes/load-users-route'

export default (app: Express): void => {
  const router = Router()
  app.use('/', router)
  loadUsersRoute(router)
}
