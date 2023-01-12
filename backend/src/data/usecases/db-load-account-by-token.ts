import { AccountModel } from '../../domain/models'
import { LoadAccountByToken } from '../../domain/usecases'
import { Decrypter, LoadAccountByTokenRepo } from '../protocols'

export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenRepo: LoadAccountByTokenRepo
  ) {}

  async load (accessToken: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenRepo.loadByToken(accessToken)

      return account
    }

    return null
  }
}
