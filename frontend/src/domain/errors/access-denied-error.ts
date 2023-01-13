export class AccessDeniedError extends Error {
  constructor () {
    super('Acesso negado, verifique suas permissões de acesso')
    this.name = 'AccessDeniedError'
  }
}
