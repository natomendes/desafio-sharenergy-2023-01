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
        phone: '00000000000',
        address: 'any_address',
        cpf: '63797312024'
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
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no email is provided', async () => {
      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no phone is provided', async () => {
      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no address is provided', async () => {
      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no address is provided', async () => {
      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address'
        })
        .expect(400)
    })

    it('Should return 403 if cpf is already in use', async () => {
      await clientCollection.insertOne({
        name: 'any_name',
        email: 'any_email@mail.com',
        phone: '00000000000',
        address: 'any_address',
        cpf: '63797312024'
      })

      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(403)
    })

    it('Should return 200 on success', async () => {
      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(200)
    })

    it('Should return 500 on server error', async () => {
      jest.spyOn(ClientMongoRepository.prototype, 'add')
        .mockRejectedValueOnce(new Error())

      await request(app)
        .post('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(500)
    })
  })

  describe('PUT /clients', () => {
    it('Should return 403 if no token is provided', async () => {
      await request(app)
        .put('/clients')
        .expect(403)
    })

    it('Should return 400 if no id is provided', async () => {
      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no name is provided', async () => {
      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          id: 'any_id',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no email is provided', async () => {
      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          id: 'any_id',
          name: 'any_name',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no phone is provided', async () => {
      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          id: 'any_id',
          name: 'any_name',
          email: 'any_email@mail.com',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no address is provided', async () => {
      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          id: 'any_id',
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          cpf: '63797312024'
        })
        .expect(400)
    })

    it('Should return 400 if no cpf is provided', async () => {
      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          id: 'any_id',
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address'
        })
        .expect(400)
    })

    it('Should return 200 on success', async () => {
      const { insertedId } = await clientCollection.insertOne({
        name: 'any_name',
        email: 'any_email@mail.com',
        phone: '00000000000',
        address: 'any_address',
        cpf: '63797312024'
      })

      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          id: insertedId.toHexString(),
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(200)
    })

    it('Should return 500 on server error', async () => {
      jest.spyOn(ClientMongoRepository.prototype, 'update')
        .mockRejectedValueOnce(new Error())

      await request(app)
        .put('/clients')
        .set('x-access-token', 'any_token')
        .send({
          id: '63bf6e4d6037b81ac2054320',
          name: 'any_name',
          email: 'any_email@mail.com',
          phone: '00000000000',
          address: 'any_address',
          cpf: '63797312024'
        })
        .expect(500)
    })
  })

  describe('DELETE /clients', () => {
    it('Should return 403 if no token is provided', async () => {
      await request(app)
        .delete('/clients')
        .expect(403)
    })

    it('Should return 400 if no clientId is provided', async () => {
      await request(app)
        .delete('/clients')
        .set('x-access-token', 'any_token')
        .expect(400)
    })

    it('Should return 204 on success', async () => {
      await request(app)
        .delete('/clients')
        .set('x-access-token', 'any_token')
        .send({ clientId: '63c8d91da43d76ca70a67c6e' })
        .expect(204)

      const { insertedId } = await clientCollection.insertOne({
        name: 'any_name',
        email: 'any_email@mail.com',
        phone: '00000000000',
        address: 'any_address',
        cpf: '63797312024'
      })

      await request(app)
        .delete('/clients')
        .set('x-access-token', 'any_token')
        .send({ clientId: insertedId.toHexString() })
        .expect(204)
    })

    it('Should return 500 on server error', async () => {
      jest.spyOn(ClientMongoRepository.prototype, 'delete')
        .mockRejectedValueOnce(new Error())

      await request(app)
        .delete('/clients')
        .set('x-access-token', 'any_token')
        .send({ clientId: '63c8d91da43d76ca70a67c6e' })
        .expect(500)
    })
  })
})
