import { UserModel } from '../models'

export interface LoadUsers {
  load(page: string): Promise<UserModel[]>
}
