import { InvalidFieldError } from '../presentation/errors'
import { Validation } from '../presentation/protocols'

export class EmailValidation implements Validation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return (!input[this.field] || emailRegex.test(input[this.field])) ? null : new InvalidFieldError(input[this.field])
  }
}
