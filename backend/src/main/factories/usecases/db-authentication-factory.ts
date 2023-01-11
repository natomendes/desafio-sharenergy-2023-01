import { DbAuthentication } from '../../../data/usecases'
import { BcryptAdapter, JwtAdapter } from '../../../infra/criptography'
import { AccountMongoRepository } from '../../../infra/db'
import env from '../../config/env'

export const makeDbAuthentication = (): DbAuthentication => {
  const bcryptAdapter = new BcryptAdapter()
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter)
}
