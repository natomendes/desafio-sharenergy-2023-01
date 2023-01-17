import { ClientModel } from '../models'

export interface UpdateClient {
  update (updateClientParams: ClientModel): Promise<ClientModel[]>
}
