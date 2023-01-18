import { AccessDeniedError } from '@/domain'
import { UserModel } from '@/domain/models'
import { makeRemoteLoadUsers } from '@/main/factories/usecases'
import { useLogout } from '@/presentation/hooks/use-logout'

export const loadUsersAdapter = async (): Promise<UserModel[]> => {
  try {
    const data = await makeRemoteLoadUsers().load('1')

    return data
  } catch (error) {
    if (error instanceof AccessDeniedError) {
      const logout = useLogout()
      logout()
    } else {
      throw error
    }
  }
}
