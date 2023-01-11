import { ClientModel } from '../../../domain/models'

export interface LoadClientsRepo {
  loadAll(): Promise<ClientModel[]>
}
