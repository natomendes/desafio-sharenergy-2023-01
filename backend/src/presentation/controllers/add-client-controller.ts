import { AddClient } from '../../domain/usecases'
import { badRequest, forbidden, ok, serverError } from '../helpers'
import { Controller, ControllerRequest, ControllerResponse, Validation } from '../protocols'

export class AddClientController implements Controller {
  constructor (
    private readonly validation: Validation,
    private readonly addClient: AddClient
  ) {}

  async handle (request: ControllerRequest): Promise<ControllerResponse> {
    try {
      const error = this.validation.validate(request.body)
      if (error) return badRequest(error)

      const { name, email, phone, address, cpf } = request.body
      const updatedUsers = await this.addClient.add({ name, email, phone, address, cpf })

      return ok(updatedUsers)
    } catch (error) {
      if (error.name === 'CpfInUseError') {
        return forbidden(error)
      }
      return serverError()
    }
  }
}
