import { AddClientController } from '../../../presentation/controllers'
import { makeDbAddAclient } from '../usecases'
import { makeAddClientValidation } from '../validations'

export const makeAddClientController = (): AddClientController => {
  return new AddClientController(makeAddClientValidation(), makeDbAddAclient())
}
