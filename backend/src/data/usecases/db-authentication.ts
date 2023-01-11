import { AccountModel } from '../../domain/models'
import { Authentication, AuthenticationParams } from '../../domain/usecases'
import { Encrypter, HashComparer, LoadAccountByUser, UpdateAccessTokenRepo } from '../protocols'

export class DbAuthentication implements Authentication {
  constructor (
    private readonly loadAccountByUser: LoadAccountByUser,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter,
    private readonly updateAccessTokenRepo: UpdateAccessTokenRepo
  ) {}

  async auth (authParams: AuthenticationParams): Promise<AccountModel> {
    const account = await this.loadAccountByUser.loadByUser(authParams.username)
    if (!account) return null

    const isValid = await this.hashComparer.compare(authParams.password, account.password)
    if (!isValid) return null

    const accessToken = await this.encrypter.encrypt(account.username, account.id)
    await this.updateAccessTokenRepo.updateAccessToken(account.id, accessToken)

    const { password, ...accWithoutPass } = account

    return { ...accWithoutPass, accessToken }
  }
}
