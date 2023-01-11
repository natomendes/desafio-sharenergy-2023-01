import { DbDeleteClient } from '../../../data/usecases'
import { ClientMongoRepository } from '../../../infra/db'

export const makeDbDeleteClient = (): DbDeleteClient => {
  const clientMongoRepository = new ClientMongoRepository()
  return new DbDeleteClient(clientMongoRepository)
}
