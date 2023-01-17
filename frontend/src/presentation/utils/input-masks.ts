import { ClientModel } from '@/domain/models'

export const cpfMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}

export const phoneMask = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{3})(\d)/, '$1 $2')
    .replace(/(\d{3})(\d)/, '$1 $2')
    .replace(/(\d{3})\d+?$/, '$1')
}

export const removeMask = (value: string): string => {
  return value.replace(/[^0-9]+/g, '')
}

export const addClientMasksMapper = (clients: ClientModel[]): ClientModel[] => {
  return clients.map((client) => ({
    ...client,
    cpf: cpfMask(client.cpf),
    phone: phoneMask(client.phone)
  }))
}
