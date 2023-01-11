import { AddClientRepo, LoadClientsRepo } from '../../../data/protocols'
import { ClientModel } from '../../../domain/models'
import { AddClientParams } from '../../../domain/usecases'
import { MongoHelper } from './mongo-helper'

export class ClientMongoRepository implements AddClientRepo, LoadClientsRepo {
  async add ({ name, email, adrress, phone, cpf }: AddClientParams): Promise<void> {
    const clientCollection = MongoHelper.getCollection('clients')

    await clientCollection.insertOne({ name, email, adrress, phone, cpf })
  }

  async loadAll (): Promise<ClientModel[]> {
    const clientCollection = MongoHelper.getCollection('clients')
    const clients = await clientCollection.find().toArray()

    return clients && MongoHelper.mapCollection<ClientModel>(clients)
  }
}
