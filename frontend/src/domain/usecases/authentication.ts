import { AccountModel } from '../models'

export type AuthParams = {
  username: string
  password: string
}

export interface Authentication {
  auth(params: AuthParams): Promise<AccountModel>
}
