import { LoginController } from '../../../presentation/controllers'
import { makeDbAuthentication } from '../usecases'
import { makeLoginValidation } from '../validations/login-validation-factory'

export const makeLoginController = (): LoginController => {
  return new LoginController(makeLoginValidation(), makeDbAuthentication())
}
