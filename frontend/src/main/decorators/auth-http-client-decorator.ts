import { HttpClient, HttpRequest, HttpResponse } from '@/data/protocols/http'
import { GetStorage } from '@/data/protocols/cache'
import { AccountModel } from '@/domain/models'

export class AuthHttpClientDecorator implements HttpClient {
  constructor (
    private readonly getStorage: GetStorage,
    private readonly httpClient: HttpClient
  ) {}

  async request (data: HttpRequest): Promise<HttpResponse<any>> {
    const account = this.getStorage.get('account') as AccountModel
    if (account?.accessToken) {
      data.headers = {
        ...(data.headers || {}),
        'x-access-token': account.accessToken
      }
    }

    const httpResponse = await this.httpClient.request(data)
    return httpResponse
  }
}
