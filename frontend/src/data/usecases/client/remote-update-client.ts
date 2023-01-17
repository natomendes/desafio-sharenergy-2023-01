import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client'
import { UnexpectedError } from '@/domain/errors'
import { ClientModel } from '@/domain/models'
import { UpdateClient } from '@/domain/usecases'

export class RemoteAddClient implements UpdateClient {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async update (clientData: ClientModel): Promise<ClientModel[]> {
    const httpReponse = await this.httpClient.request({
      url: this.url,
      method: 'put',
      body: clientData
    })

    switch (httpReponse.statusCode) {
      case HttpStatusCode.ok: return httpReponse.body
      default: throw new UnexpectedError()
    }
  }
}
