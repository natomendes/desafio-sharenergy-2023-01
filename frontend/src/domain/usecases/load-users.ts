import { UserModel } from '../models'

export interface LoadUsers {
  load(page: string, accessToken: string): Promise<UserModel[]>
}
