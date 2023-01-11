import { LoadClientsController } from '../../../presentation/controllers'
import { makeDbLoadClients } from '../usecases'

export const makeLoadClientsController = (): LoadClientsController => {
  return new LoadClientsController(makeDbLoadClients())
}
