import { LoadClientsRepo } from '../../../data/protocols'
import { ClientModel } from '../../../domain/models'
import { MongoHelper } from './mongo-helper'

export class ClientMongoRepository implements LoadClientsRepo {
  async loadAll (): Promise<ClientModel[]> {
    const clientCollection = MongoHelper.getCollection('clients')
    const clients = await clientCollection.find().toArray()

    return clients && MongoHelper.mapCollection<ClientModel>(clients)
  }
}
