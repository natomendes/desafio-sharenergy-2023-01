import { LoadClients } from '../../domain/usecases'
import { ok, serverError } from '../helpers'
import { Controller, ControllerRequest, ControllerResponse } from '../protocols'

export class LoadClientsController implements Controller {
  constructor (private readonly loadClients: LoadClients) {}

  async handle (_request: ControllerRequest): Promise<ControllerResponse> {
    try {
      const clients = await this.loadClients.load()

      return ok({ clients })
    } catch (error) {
      return serverError()
    }
  }
}
