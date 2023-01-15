import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { DeleteClient } from '@/domain/usecases'

export class RemoteDeleteClient implements DeleteClient {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async delete (clientId: string): Promise<void> {
    const httpReponse = await this.httpClient.request({
      url: this.url,
      method: 'delete',
      body: { clientId }
    })

    switch (httpReponse.statusCode) {
      case HttpStatusCode.noContent: break
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}
