import { UserModel } from '../../domain/models/user'
import { LoadUsers, LoadOptions } from '../../domain/usecases/load-users'
import { HttpClient } from '../protocols/http'

export class RemoteLoadUsers implements LoadUsers {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient
  ) {}

  async load (options: LoadOptions): Promise<UserModel[]> {
    const { statusCode, body } = await this.httpClient.request({
      url: this.buildUrl(this.url, options),
      method: 'get'
    })
    if (statusCode === 200) return body

    throw new Error()
  }

  private buildUrl (baseUrl: string, options: LoadOptions): string {
    const { page } = options
    return page
      ? `${baseUrl}&page=${page}&results=10&seed=abc`
      : baseUrl
  }
}
