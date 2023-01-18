import { UserModel } from '@/domain/models'

export interface LoadUsers {
  load(page: string): Promise<UserModel[]>
}
