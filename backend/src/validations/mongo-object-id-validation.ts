import { ObjectId } from 'mongodb'
import { InvalidFieldError } from '../presentation/errors'
import { Validation } from '../presentation/protocols'

export class MongoObjectIdValidation implements Validation {
  constructor (private readonly field: string) {}

  validate (input: object): Error {
    return (!input[this.field] || ObjectId.isValid(input[this.field])) ? null : new InvalidFieldError(this.field)
  }
}
