import { AddClient, AddClientParams } from '../../domain/usecases'
import { AddClientRepo } from '../protocols'

export class DbAddClient implements AddClient {
  constructor (private readonly addClientRepo: AddClientRepo) {}

  async add (addClientParams: AddClientParams): Promise<void> {
    await this.addClientRepo.add(addClientParams)
  }
}
