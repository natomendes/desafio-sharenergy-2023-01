import { Authentication } from '../../domain/usecases'
import { badRequest, ok, serverError, unauthorized } from '../helpers'
import { Controller, ControllerRequest, ControllerResponse, Validation } from '../protocols'

export class LoginController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) {}

  async handle (request: ControllerRequest): Promise<ControllerResponse> {
    try {
      const error = this.validation.validate(request.body)
      if (error) return badRequest(error)

      const { username, password } = request.body

      const account = await this.authentication.auth({ username, password })
      if (!account) return unauthorized()

      return ok({ account })
    } catch (error) {
      return serverError()
    }
  }
}
