import axios from 'axios'
import request from 'supertest'
import { DbLoadAccountByToken } from '../../../src/data/usecases/db-load-account-by-token'
import app from '../../../src/main/config/app'
import { randomUserApiMock } from '../../mocks/random-users-api'

describe('User Route', () => {
  beforeEach(() => {
    jest.spyOn(DbLoadAccountByToken.prototype, 'load')
      .mockResolvedValueOnce({
        id: 'any_id',
        name: 'any_name',
        email: 'any_email@mail.com',
        username: 'any_username',
        password: 'any_password'
      })
  })

  it('Should return 403 if no token is provided', async () => {
    await request(app)
      .post('/users')
      .expect(403)
  })

  it('Should return 400 if no page is provided', async () => {
    await request(app)
      .post('/users')
      .set('x-access-token', 'any_token')
      .expect(400)
  })

  it('Should return 200 on success', async () => {
    jest.spyOn(axios, 'request')
      .mockResolvedValueOnce({
        status: 200,
        data: randomUserApiMock
      })
    await request(app)
      .post('/users')
      .send({ page: 1 })
      .set('x-access-token', 'any_token')
      .expect(200)
  })

  it('Should return 500 on server error', async () => {
    jest.spyOn(axios, 'request')
      .mockRejectedValueOnce(new Error())
    await request(app)
      .post('/users')
      .send({ page: 1 })
      .set('x-access-token', 'any_token')
      .expect(500)
  })
})
