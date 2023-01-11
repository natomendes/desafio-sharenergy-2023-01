import { AccountModel } from '../../../domain/models'

export interface LoadAccountByUser {
  loadByUser (username: string): Promise<AccountModel>
}
