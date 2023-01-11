import { HashComparer } from '../../data/protocols'
import bcrypt from 'bcrypt'

export class BcryptAdapter implements HashComparer {
  async compare (value: string, hashedValue: string): Promise<boolean> {
    return bcrypt.compare(value, hashedValue)
  }
}
