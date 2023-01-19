import request from 'supertest'
import { DbLoadAccountByToken } from '../../../src/data/usecases/db-load-account-by-token'
import app from '../../../src/main/config/app'

describe('Login Routes', () => {
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
})
