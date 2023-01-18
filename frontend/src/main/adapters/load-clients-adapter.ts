import { AccessDeniedError } from '@/domain'
import { ClientModel } from '@/domain/models'
import { makeRemoteLoadClients } from '@/main/factories/usecases'
import { useLogout } from '@/presentation/hooks/use-logout'

export const loadClientsAdapter = async (): Promise<ClientModel[]> => {
  try {
    const clients = await makeRemoteLoadClients().load()

    return clients
  } catch (error) {
    if (error instanceof AccessDeniedError) {
      const logout = useLogout()
      logout()
    } else {
      throw error
    }
  }
}
