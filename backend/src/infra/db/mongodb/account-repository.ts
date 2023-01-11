import { LoadAccountByUser } from '../../../data/protocols'
import { AccountModel } from '../../../domain/models'
import { MongoHelper } from './mongo-helper'

export class AccountMongoRepository implements LoadAccountByUser {
  async loadByUser (username: string): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ username })

    return account && MongoHelper.map<AccountModel>(account)
  }
}
