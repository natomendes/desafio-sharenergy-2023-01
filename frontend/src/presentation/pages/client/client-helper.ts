import { ClientModel } from '@/domain'
import { Validation } from '@/presentation/protocols'

export type ClientErrorState = {
  name: string
  cpf: string
  email: string
  phone: string
  address: string
  errorMessage: string
  formInvalid: boolean
}

export const clientState = { id: '', name: '', cpf: '', email: '', phone: '', address: '' }

export const clientErrorState = { name: '', cpf: '', email: '', phone: '', address: '', errorMessage: '', formInvalid: true }

export const validateClientState = (
  state: ClientModel,
  validation: Validation,
  errorState: ClientErrorState,
  setErrorState: React.Dispatch<React.SetStateAction<ClientErrorState>>
): void => {
  const { id, ...formData } = state
  const nameError = validation.validate('name', formData)
  const cpfError = validation.validate('cpf', formData)
  const emailError = validation.validate('email', formData)
  const addressError = validation.validate('address', formData)
  const phoneError = validation.validate('phone', formData)

  setErrorState({
    ...errorState,
    name: nameError,
    cpf: cpfError,
    email: emailError,
    address: addressError,
    phone: phoneError,
    formInvalid: !!nameError || !!cpfError || !!emailError || !!addressError || !!phoneError
  })
}
