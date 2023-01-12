import { Decrypter, Encrypter } from '../../data/protocols'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (private readonly secret: string) {}

  async encrypt (username: string, id: string): Promise<string> {
    return jwt.sign({ username, id }, this.secret)
  }

  async decrypt (accessToken: string): Promise<string> {
    try {
      const value = jwt.verify(accessToken, this.secret)

      return value as any
    } catch (error) {
      return null
    }
  }
}
