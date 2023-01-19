import { Collection } from 'mongodb'
import request from 'supertest'
import { DbLoadAccountByToken } from '../../../src/data/usecases/db-load-account-by-token'
import { MongoHelper } from '../../../src/infra/db'
import app from '../../../src/main/config/app'
import { accountMock } from '../../mocks'

let clientCollection: Collection

describe('Client Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    jest.spyOn(DbLoadAccountByToken.prototype, 'load')
      .mockResolvedValueOnce(accountMock)
    clientCollection = MongoHelper.getCollection('clients')
    await clientCollection.deleteMany({})
  })
  describe('GET /clients', () => {
    it('Should return 200 on success', async () => {
      await clientCollection.insertOne({
        name: 'any_name',
        email: 'any_email@mail.com',
        phone: 'any_phone',
        address: 'any_address',
        cpf: 'any_cpf'
      })
      await request(app)
        .get('/clients')
        .set('x-access-token', 'any_token')
        .expect(200)
    })
  })
})
