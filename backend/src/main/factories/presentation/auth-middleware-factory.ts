import { AuthMiddleware } from '../../../presentation/middlewares'
import { makeDbLoadAccountByToken } from '../usecases'

export const makeAuthMiddleware = (): AuthMiddleware => {
  return new AuthMiddleware(makeDbLoadAccountByToken())
}
