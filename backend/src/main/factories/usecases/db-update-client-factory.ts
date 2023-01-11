import { DbUpdateClient } from '../../../data/usecases'
import { ClientMongoRepository } from '../../../infra/db'

export const makeDbUpdateClient = (): DbUpdateClient => {
  const clientMongoRepository = new ClientMongoRepository()
  return new DbUpdateClient(clientMongoRepository)
}
