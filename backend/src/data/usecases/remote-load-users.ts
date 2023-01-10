import { UserModel } from '../../domain/models/user'
import { LoadUsers, LoadOptions } from '../../domain/usecases/load-users'
import { HttpClient } from '../protocols/http'

export class RemoteLoadUser implements LoadUsers {
  constructor (
    private readonly httpClient: HttpClient
  ) {}

  async load (url: string, options: LoadOptions): Promise<UserModel[]> {
    const { statusCode, body } = await this.httpClient.request({
      url: this.buildUrl(url, options),
      method: 'get'
    })
    if (statusCode === 200) return body

    throw new Error(body)
  }

  private buildUrl (baseUrl: string, options: LoadOptions): string {
    const { page } = options
    return page
      ? `${baseUrl}&page=${page}&results=10&seed=abc`
      : baseUrl
  }
}
