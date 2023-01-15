import { ClientModel } from '@/domain/models'

export interface LoadClients {
  load (): Promise<ClientModel[]>
}
