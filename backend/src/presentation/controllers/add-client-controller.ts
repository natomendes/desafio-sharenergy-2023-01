import { AddClient } from '../../domain/usecases'
import { badRequest, noContent, serverError } from '../helpers'
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
      await this.addClient.add({ name, email, phone, address, cpf })

      return noContent()
    } catch (error) {
      return serverError()
    }
  }
}
