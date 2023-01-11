import { Validation } from '../../../presentation/protocols'
import { RequiredFieldValidation, ValidationComposite } from '../../../validations'

export const makeLoginValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['username', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
