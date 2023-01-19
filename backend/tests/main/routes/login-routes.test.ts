import { hash } from 'bcrypt'
import request from 'supertest'
import { Collection } from 'mongodb'
import { MongoHelper } from '../../../src/infra/db'
import app from '../../../src/main/config/app'

let accountCollection: Collection

describe('Login Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.deleteMany({})
  })

  it('Should return 200 on login', async () => {
    const password = await hash('123456', 12)
    await accountCollection.insertOne({
      name: 'any_name',
      email: 'any_email@mail.com',
      username: 'any_username',
      password
    })
    await request(app)
      .post('/login')
      .send({
        username: 'any_username',
        password: '123456'
      })
      .expect(200)
  })
})
