import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { UserModel } from '@/domain/models'
import { LoadUsers } from '@/domain/usecases/load-users'
import { HttpClient, HttpStatusCode } from '../protocols/http/http-client'

export class RemoteLoadUsers implements LoadUsers {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async load (page: string, accessToken: string): Promise<UserModel[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      headers: { 'x-access-token': accessToken },
      body: { page }
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}
