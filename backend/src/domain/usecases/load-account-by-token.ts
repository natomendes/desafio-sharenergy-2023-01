import { AccountModel } from '../models'

export interface LoadAccountByToken {
  load (accessToken: string): Promise<AccountModel>
}
