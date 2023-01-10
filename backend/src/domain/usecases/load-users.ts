import { UserModel } from '../models'

export type LoadOptions = {
  page?: string
}

export interface LoadUsers {
  load (options?: LoadOptions): Promise<UserModel[]>
}
