import { DeleteClient } from '../../domain/usecases'
import { DeleteClientRepo } from '../protocols'

export class DbDeleteClient implements DeleteClient {
  constructor (private readonly deleteClientRepo: DeleteClientRepo) {}

  async delete (clientId: string): Promise<void> {
    await this.deleteClientRepo.delete(clientId)
  }
}
