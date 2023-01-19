import { ValidationBuilder } from '@/main/builders'
import { ValidationComposite } from '@/main/composites'

export const makeLoginValidation = (): ValidationComposite => ValidationComposite.build([
  ...ValidationBuilder.field('username').required().build(),
  ...ValidationBuilder.field('password').required().build()
])
