import { Authentication, AuthenticationParams } from '../../domain/usecases'
import { Encrypter, HashComparer, LoadAccountByUser } from '../protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByUser: LoadAccountByUser,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter
  ) {}

  async auth (authParams: AuthenticationParams): Promise<string> {
    const account = await this.loadAccountByUser.loadByUser(authParams.username)
    if (!account) return null

    const isValid = await this.hashComparer.compare(authParams.password, account.password)
    if (!isValid) return null

    const accessToken = await this.encrypter.encrypt(account.username)

    return accessToken
  }
}
