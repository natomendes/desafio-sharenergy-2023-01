import { ClientModel } from '../models'

export type ClientParams = Omit<ClientModel, 'id'>

export interface AddClient {
  add (addClientParams: ClientParams): Promise<ClientModel[]>
}
