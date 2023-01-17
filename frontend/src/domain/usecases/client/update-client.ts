import { ClientModel } from '@/domain/models'

export interface UpdateClient {
  update (clientData: ClientModel): Promise<ClientModel[]>
}
