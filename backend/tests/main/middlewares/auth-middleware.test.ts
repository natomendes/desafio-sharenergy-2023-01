import request from 'supertest'
import app from '../../../src/main/config/app'
import jwt from 'jsonwebtoken'
import { MongoHelper } from '../../../src/infra/db'
import { hash } from 'bcrypt'

describe('User Route', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  it('Should return 403 if no token is provided', async () => {
    await request(app)
      .post('/users')
      .expect(403)
  })

  it('Should return 403 if token is invalid', async () => {
    await request(app)
      .post('/users')
      .set('x-access-token', 'invalid_token')
      .expect(403)
  })

  it('Should return 403 if no account is found with token provided', async () => {
    jest.spyOn(jwt, 'verify').mockImplementationOnce(() => 'invalid_token')
    await request(app)
      .post('/users')
      .set('x-access-token', 'invalid_token')
      .expect(403)
  })

  it('Should return 200 on success', async () => {
    const accountCollection = MongoHelper.getCollection('accounts')
    const password = await hash('123456', 12)
    await accountCollection.insertOne({
      name: 'any_name',
      email: 'any_email@mail.com',
      username: 'any_username',
      password
    })
    const response = await request(app)
      .post('/login')
      .send({
        username: 'any_username',
        password: '123456'
      })
    const { account } = response.body
    await request(app)
      .post('/users')
      .set('x-access-token', account.accessToken)
      .send({ page: '1' })
      .expect(200)
  })
})
