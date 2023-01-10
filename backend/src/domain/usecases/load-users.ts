import { UserModel } from '../models/user'

export type LoadOptions = {
  page?: string
}

export interface LoadUsers {
  load (url: string, options?: LoadOptions): Promise<UserModel[]>
}
