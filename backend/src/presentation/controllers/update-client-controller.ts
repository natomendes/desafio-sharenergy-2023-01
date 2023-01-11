import { UpdateClient } from '../../domain/usecases'
import { badRequest, noContent, serverError } from '../helpers'
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

      const { name, email, phone, address, cpf } = request.body
      await this.updateClient.update({ name, email, phone, address, cpf })

      return noContent()
    } catch (error) {
      console.log(error)
      return serverError()
    }
  }
}
