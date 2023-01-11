import { ClientModel } from '../../domain/models'
import { LoadClients } from '../../domain/usecases'
import { LoadClientsRepo } from '../protocols'

export class DbLoadClients implements LoadClients {
  constructor (private readonly loadClientsRepo: LoadClientsRepo) {}

  async load (): Promise<ClientModel[]> {
    return await this.loadClientsRepo.loadAll()
  }
}
