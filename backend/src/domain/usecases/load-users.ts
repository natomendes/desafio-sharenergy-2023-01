import { UserModel } from '../models/user'

export type LoadOptions = {
  page?: string
}

export interface LoadUsers {
  load (options?: LoadOptions): Promise<UserModel[]>
}
