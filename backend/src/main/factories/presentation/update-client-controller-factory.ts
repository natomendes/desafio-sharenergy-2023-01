import { UpdateClientController } from '../../../presentation/controllers'
import { makeDbUpdateClient } from '../usecases'
import { makeClientValidation } from '../validations'

export const makeUpdateClientController = (): UpdateClientController => {
  return new UpdateClientController(makeClientValidation(), makeDbUpdateClient())
}
