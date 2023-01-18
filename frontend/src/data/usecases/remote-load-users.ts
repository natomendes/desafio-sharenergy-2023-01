import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { UserModel } from '@/domain/models'
import { LoadUsers } from '@/domain/usecases/load-users'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'

export class RemoteLoadUsers implements LoadUsers {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async load (page: string): Promise<UserModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: { page }
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}
