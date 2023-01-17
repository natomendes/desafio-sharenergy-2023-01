import { ValidationBuilder } from '@/main/builders'
import { ValidationComposite } from '@/main/composites/validation-composite'

export const makeClientValidation = (): ValidationComposite => ValidationComposite.build([
  ...ValidationBuilder.field('name').required().build(),
  ...ValidationBuilder.field('cpf').required().cpf().build(),
  ...ValidationBuilder.field('email').required().email().build(),
  ...ValidationBuilder.field('address').required().build(),
  ...ValidationBuilder.field('phone').required().cpf().build()
])
