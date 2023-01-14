import { UnexpectedError } from '@/domain/errors'
import { GetRandomdog } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'

export class RemoteGetRandomDog implements GetRandomdog {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async get (): Promise<string> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body.url
      default: throw new UnexpectedError()
    }
  }
}
