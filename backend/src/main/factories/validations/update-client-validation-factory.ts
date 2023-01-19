import { Validation } from '../../../presentation/protocols'
import { RequiredFieldValidation, ValidationComposite } from '../../../validations'

export const makeUpdateClientValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['id', 'name', 'email', 'phone', 'address', 'cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }

  return new ValidationComposite(validations)
}
