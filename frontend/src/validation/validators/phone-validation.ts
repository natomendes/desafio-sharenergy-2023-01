import { FieldValidation } from '@/validation/protocols'
import { InvalidFieldError } from '@/validation/errors'
import { removeMask } from '@/presentation/utils'

export class PhoneValidation implements FieldValidation {
  constructor (readonly field: string) {}

  validate (input: object): Error {
    return (!input[this.field] || removeMask(input[this.field]).length === 11) ? null : new InvalidFieldError()
  }
}
