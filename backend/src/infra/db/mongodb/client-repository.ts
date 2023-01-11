import { AddClientRepo, LoadClientsRepo } from '../../../data/protocols'
import { LoadClientByCpfRepo } from '../../../data/protocols/db/load-client-by-cpf-repo'
import { ClientModel } from '../../../domain/models'
import { AddClientParams } from '../../../domain/usecases'
import { MongoHelper } from './mongo-helper'

export class ClientMongoRepository implements AddClientRepo, LoadClientsRepo, LoadClientByCpfRepo {
  async add ({ name, email, address, phone, cpf }: AddClientParams): Promise<void> {
    const clientCollection = MongoHelper.getCollection('clients')

    await clientCollection.insertOne({ name, email, address, phone, cpf })
  }

  async loadAll (): Promise<ClientModel[]> {
    const clientCollection = MongoHelper.getCollection('clients')
    const clients = await clientCollection.find().toArray()

    return clients && MongoHelper.mapCollection<ClientModel>(clients)
  }

  async loadByCpf (cpf: string): Promise<ClientModel> {
    const clientCollection = MongoHelper.getCollection('clients')
    const client = await clientCollection.findOne({ cpf })

    return client && MongoHelper.map<ClientModel>(client)
  }
}
