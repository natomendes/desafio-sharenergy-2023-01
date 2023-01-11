import { ClientParams, UpdateClient } from '../../domain/usecases'
import { UpdateClientRepo } from '../protocols'

export class DbUpdateClient implements UpdateClient {
  constructor (private readonly updateClientRepo: UpdateClientRepo) {}

  async update (updateClientParams: ClientParams): Promise<void> {
    await this.updateClientRepo.update(updateClientParams)
  }
}
