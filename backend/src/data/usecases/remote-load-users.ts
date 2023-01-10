import { UserModel } from '../../domain/models'
import { LoadUsers, LoadOptions } from '../../domain/usecases'
import { mapUsers } from '../../infra/utils'
import { HttpClient } from '../protocols'

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
    if (statusCode === 200) {
      return mapUsers(body.results)
    }

    throw new Error()
  }

  private buildUrl (baseUrl: string, options: LoadOptions): string {
    const { page } = options
    return page
      ? `${baseUrl}&page=${page}&results=10&seed=abc`
      : baseUrl
  }
}
