import { LoadUsers } from '../../domain/usecases'
import { MissingParamError } from '../errors'
import { badRequest, ok, serverError } from '../helpers'
import { Controller, ControllerRequest, ControllerResponse } from '../protocols'

export class LoadUsersController implements Controller {
  constructor (
    private readonly loadUsers: LoadUsers
  ) {}

  async handle (request: ControllerRequest): Promise<ControllerResponse> {
    if (!request.body.page) return badRequest(new MissingParamError('page'))
    try {
      const { page } = request.body
      const users = await this.loadUsers.load({ page })

      return ok(users)
    } catch (error) {
      return serverError()
    }
  }
}
