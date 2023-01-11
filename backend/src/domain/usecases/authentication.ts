import { AccountModel } from '../models'

export type AuthenticationParams = {
  username: string
  password: string
}

export interface Authentication {
  auth (authParams: AuthenticationParams): Promise<AccountModel>
}
