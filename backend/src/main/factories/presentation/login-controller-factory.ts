import { LoginController } from '../../../presentation/controllers/login-controller'
import { makeDbAuthentication } from '../usecases/db-authentication-factory'
import { makeLoginValidation } from '../validations/login-validation-factory'

export const makeLoginController = (): LoginController => {
  return new LoginController(makeLoginValidation(), makeDbAuthentication())
}
