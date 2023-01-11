export interface ClientModel {
  id: string
  name: string
  email: string
  phone: string
  adrress: {
    street: string
    city: string
    country: string
  }
  cpf: string
}
