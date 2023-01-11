import { ClientModel } from '../models'

export type AddClientParams = Omit<ClientModel, 'id'>

export interface AddClient {
  add (addClientParams: AddClientParams): Promise<void>
}
