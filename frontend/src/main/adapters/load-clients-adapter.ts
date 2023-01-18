import { ClientModel } from '@/domain/models'
import { makeRemoteLoadClients } from '@/main/factories/usecases'

export const loadClientsAdapter = async (): Promise<ClientModel[]> => {
  const clients = await makeRemoteLoadClients().load()

  return clients
}
