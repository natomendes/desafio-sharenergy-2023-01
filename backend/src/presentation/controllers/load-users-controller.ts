import { LoadUsers } from '../../domain/usecases/load-users'
import { MissingParamError } from '../error/missing-param-error'
import { badRequest, ok, serverError } from '../helpers/http-responses'
import { Controller, ControllerRequest, ControllerResponse } from '../protocols/controller'

export class LoadUsersController implements Controller {
  constructor (
    private readonly loadUsers: LoadUsers
  ) {}

  async handle (request: ControllerRequest): Promise<ControllerResponse> {
    try {
      if (!request?.body.page) return badRequest(new MissingParamError('page'))

      const { page } = request?.body
      const users = this.loadUsers.load({ page })

      return ok(users)
    } catch (error) {
      return serverError()
    }
  }
}
