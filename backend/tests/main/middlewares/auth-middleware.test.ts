import request from 'supertest'
import app from '../../../src/main/config/app'

describe('User Route', () => {
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
})
