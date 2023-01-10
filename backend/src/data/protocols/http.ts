export type HttpMethod = 'post' | 'get' | 'put' | 'delete'

export type HttpRequest = {
  url: string
  method: HttpMethod
  body?: any
  headers?: any
}

export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>
}

export enum HttpStatusCode {
  ok = 200
}

export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode
  body?: T
}
