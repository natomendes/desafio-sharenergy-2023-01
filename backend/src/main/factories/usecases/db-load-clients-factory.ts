import { DbLoadClients } from '../../../data/usecases'
import { ClientMongoRepository } from '../../../infra/db'

export const makeDbLoadClients = (): DbLoadClients => {
  const clientMongoRepository = new ClientMongoRepository()

  return new DbLoadClients(clientMongoRepository)
}
