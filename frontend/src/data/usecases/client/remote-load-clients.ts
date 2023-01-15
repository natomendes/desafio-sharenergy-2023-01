import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { ClientModel } from '@/domain/models'
import { LoadClients } from '@/domain/usecases/client/load-clients'

export class RemoteLoadClients implements LoadClients {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async load (): Promise<ClientModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}
