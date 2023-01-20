import { Validation } from '../../../presentation/protocols'
import { CpfValidation, EmailValidation, RequiredFieldValidation, ValidationComposite } from '../../../validations'

export const makeAddClientValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['name', 'email', 'phone', 'address', 'cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new CpfValidation('cpf'))
  validations.push(new EmailValidation('email'))
  return new ValidationComposite(validations)
}
