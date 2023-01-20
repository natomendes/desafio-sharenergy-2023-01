import { InvalidFieldError } from '../presentation/errors'
import { Validation } from '../presentation/protocols'

export class PhoneValidation implements Validation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    return (!input[this.field] || input[this.field].length === 11) ? null : new InvalidFieldError(this.field)
  }
}
