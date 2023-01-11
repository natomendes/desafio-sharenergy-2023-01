import { DeleteClientController } from '../../../presentation/controllers'
import { makeDbDeleteClient } from '../usecases'

export const makeDeleteClientController = (): DeleteClientController => {
  return new DeleteClientController(makeDbDeleteClient())
}
