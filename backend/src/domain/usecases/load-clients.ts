import { ClientModel } from '../models'

export interface LoadClients {
  load (): Promise<ClientModel[]>
}
