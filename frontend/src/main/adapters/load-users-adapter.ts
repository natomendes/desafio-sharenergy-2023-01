import { UserModel } from '@/domain/models'
import { makeRemoteLoadUsers } from '../factories/usecases'
import { getCurrentAccountAdapter } from './current-account-adapter'

export const loadUsersAdapter = async (): Promise<UserModel[]> => {
  const account = getCurrentAccountAdapter()
  if (account) {
    const data = await makeRemoteLoadUsers().load('1')

    return data
  }

  return null
}
