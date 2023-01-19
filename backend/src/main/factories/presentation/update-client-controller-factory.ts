import { UpdateClientController } from '../../../presentation/controllers'
import { makeDbUpdateClient } from '../usecases'
import { makeUpdateClientValidation } from '../validations'

export const makeUpdateClientController = (): UpdateClientController => {
  return new UpdateClientController(makeUpdateClientValidation(), makeDbUpdateClient())
}
