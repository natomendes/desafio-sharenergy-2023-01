import { UpdateClientController } from '../../../presentation/controllers/update-client-controller'
import { makeDbUpdateClient } from '../usecases'
import { makeClientValidation } from '../validations'

export const makeUpdateClientController = (): UpdateClientController => {
  return new UpdateClientController(makeClientValidation(), makeDbUpdateClient())
}
