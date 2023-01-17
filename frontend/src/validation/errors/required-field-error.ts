export class RequiredFieldError extends Error {
  constructor (field: string) {
    super(`${field} é obrigatório`)
    this.name = 'RequiredFieldError'
  }
}
