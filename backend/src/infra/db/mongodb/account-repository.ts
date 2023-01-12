import { ObjectId } from 'mongodb'
import { LoadAccountByTokenRepo, LoadAccountByUser, UpdateAccessTokenRepo } from '../../../data/protocols'
import { AccountModel } from '../../../domain/models'
import { MongoHelper } from './mongo-helper'

export class AccountMongoRepository implements LoadAccountByUser, LoadAccountByTokenRepo, UpdateAccessTokenRepo {
  async loadByUser (username: string): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ username })

    return account && MongoHelper.map<AccountModel>(account)
  }

  async loadByToken (accessToken: string): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const account = await accountCollection.findOne({ accessToken })

    return account && MongoHelper.map<AccountModel>(account)
  }

  async updateAccessToken (accountId: string, accessToken: string): Promise<void> {
    const accountCollection = MongoHelper.getCollection('accounts')

    await accountCollection.findOneAndUpdate({ _id: new ObjectId(accountId) }, { $set: { accessToken } })
  }
}
