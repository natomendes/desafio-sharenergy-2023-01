import { HttpClient, HttpStatusCode } from '@/data/protocols/http/http-client'
import { CpfInUseError, UnexpectedError } from '@/domain/errors'
import { AddClient, ClientParams } from '@/domain/usecases'

export class RemoteAddClient implements AddClient {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async add (clientData: ClientParams): Promise<void> {
    const httpReponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: clientData
    })

    switch (httpReponse.statusCode) {
      case HttpStatusCode.noContent: break
      case HttpStatusCode.forbidden: throw new CpfInUseError()
      default: throw new UnexpectedError()
    }
  }
}
