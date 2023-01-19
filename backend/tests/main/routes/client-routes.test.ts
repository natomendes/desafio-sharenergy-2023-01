import { Collection } from 'mongodb'
import request from 'supertest'
import { DbLoadAccountByToken } from '../../../src/data/usecases/db-load-account-by-token'
import { ClientMongoRepository, MongoHelper } from '../../../src/infra/db'
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
    it('Should return 403 if no token is provided', async () => {
      await request(app)
        .get('/clients')
        .expect(403)
    })

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

    it('Should return 500 on server error', async () => {
      jest.spyOn(ClientMongoRepository.prototype, 'loadAll')
        .mockRejectedValueOnce(new Error())
      await request(app)
        .get('/clients')
        .set('x-access-token', 'any_token')
        .expect(500)
    })
  })

  describe('POST /clients', () => {
    it('Should return 403 if no token is provided', async () => {
      await request(app)
        .post('/clients')
        .expect(403)
    })

    it('Should return 400 if no name is provided', async () => {
      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          email: 'any_email@mail.com',
          phone: 'any_phone',
          address: 'any_address',
          cpf: 'any_cpf'
        })
        .expect(400)
    })
  })
})
