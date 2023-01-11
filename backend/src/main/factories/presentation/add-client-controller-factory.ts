import { AddClientController } from '../../../presentation/controllers'
import { makeDbAddAclient } from '../usecases'
import { makeClientValidation } from '../validations'

export const makeAddClientController = (): AddClientController => {
  return new AddClientController(makeClientValidation(), makeDbAddAclient())
}
