import { UpdateClient } from '../../domain/usecases'
import { badRequest, ok, serverError } from '../helpers'
import { Controller, ControllerRequest, ControllerResponse, Validation } from '../protocols'

export class UpdateClientController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly updateClient: UpdateClient
  ) {}

  async handle (request: ControllerRequest): Promise<ControllerResponse> {
    try {
      const error = this.validation.validate(request.body)
      if (error) return badRequest(error)

      const { id, name, email, phone, address, cpf } = request.body
      const updatedClients = await this.updateClient.update({ id, name, email, phone, address, cpf })

      return ok(updatedClients)
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
