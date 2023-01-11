export class CpfInUseError extends Error {
  constructor () {
    super('Cpf already in use')
    this.name = 'CpfInUseError'
  }
}
