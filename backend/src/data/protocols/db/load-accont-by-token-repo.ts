import { AccountModel } from '../../../domain/models'

export interface LoadAccountByTokenRepo {
  loadByToken (accessToken: string): Promise<AccountModel>
}
