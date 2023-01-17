import { ClientModel } from '../../domain/models'
import { UpdateClient } from '../../domain/usecases'
import { LoadClientsRepo, UpdateClientRepo } from '../protocols'

export class DbUpdateClient implements UpdateClient {
  constructor (
    private readonly updateClientRepo: UpdateClientRepo,
    private readonly loadClientsRepo: LoadClientsRepo
  ) {}

  async update (updateClientParams: ClientModel): Promise<ClientModel[]> {
    await this.updateClientRepo.update(updateClientParams)

    return await this.loadClientsRepo.loadAll()
  }
}
