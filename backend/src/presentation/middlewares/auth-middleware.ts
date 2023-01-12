import { LoadAccountByToken } from '../../domain/usecases'
import { AccessDeniedError } from '../errors'
import { forbidden, ok, serverError } from '../helpers'
import { Controller, ControllerRequest, ControllerResponse } from '../protocols'

export class AuthMiddleware implements Controller {
  constructor (private readonly loadAccountByToken: LoadAccountByToken) {}

  async handle (request: ControllerRequest): Promise<ControllerResponse> {
    try {
      const accessToken = request.headers?.['x-access-token']
      if (accessToken) {
        const account = await this.loadAccountByToken.load(accessToken)

        if (account) return ok({ accountId: account.id })
      }

      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError()
    }
  }
}
