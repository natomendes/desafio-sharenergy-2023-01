export class CpfInUseError extends Error {
  constructor () {
    super('Cpf já cadastrado')
    this.name = 'CpfInUseError'
  }
}
