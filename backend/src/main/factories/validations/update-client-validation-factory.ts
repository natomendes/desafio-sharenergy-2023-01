import { Validation } from '../../../presentation/protocols'
import { CpfValidation, EmailValidation, MongoObjectIdValidation, PhoneValidation, RequiredFieldValidation, ValidationComposite } from '../../../validations'

export const makeUpdateClientValidation = (): Validation => {
  const validations: Validation[] = []
  for (const field of ['id', 'name', 'email', 'phone', 'address', 'cpf']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new MongoObjectIdValidation('id'))
  validations.push(new CpfValidation('cpf'))
  validations.push(new EmailValidation('email'))
  validations.push(new PhoneValidation('phone'))
  return new ValidationComposite(validations)
}
