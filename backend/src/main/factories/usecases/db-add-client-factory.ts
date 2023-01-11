import { DbAddClient } from '../../../data/usecases'
import { ClientMongoRepository } from '../../../infra/db'

export const makeDbAddAclient = (): DbAddClient => {
  const clientMongoRepository = new ClientMongoRepository()
  return new DbAddClient(clientMongoRepository, clientMongoRepository)
}
