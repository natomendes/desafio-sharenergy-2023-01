import { DbLoadAccountByToken } from '../../../data/usecases/db-load-account-by-token'
import { JwtAdapter } from '../../../infra/criptography'
import { AccountMongoRepository } from '../../../infra/db'
import env from '../../config/env'

export const makeDbLoadAccountByToken = (): DbLoadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbLoadAccountByToken(jwtAdapter, accountMongoRepository)
}
