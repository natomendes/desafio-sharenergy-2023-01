import { DeleteClient } from '../../domain/usecases'
import { MissingParamError } from '../errors'
import { badRequest, noContent, serverError } from '../helpers'
import { Controller, ControllerRequest, ControllerResponse } from '../protocols'

export class DeleteClientController implements Controller {
  constructor (
    private readonly deleteClient: DeleteClient
  ) {}

  async handle (request: ControllerRequest): Promise<ControllerResponse> {
    try {
      if (!request.body.clientId) return badRequest(new MissingParamError('cliendId'))

      const { clientId } = request.body
      await this.deleteClient.delete(clientId)

      return noContent()
    } catch (error) {
      return serverError()
    }
  }
}
