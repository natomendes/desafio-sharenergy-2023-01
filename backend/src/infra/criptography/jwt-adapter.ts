import { Encrypter } from '../../data/protocols'
import jwt from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor (private readonly secret: string) {}

  async encrypt (username: string, id: string): Promise<string> {
    return jwt.sign({ username, id }, this.secret)
  }
}
