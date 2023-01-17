import { ClientModel } from '@/domain/models'

export type ClientParams = Omit<ClientModel, 'id'>

export interface AddClient {
  add (clientData: ClientParams): Promise<ClientModel[]>
}
