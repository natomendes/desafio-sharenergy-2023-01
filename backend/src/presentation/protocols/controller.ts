export type ControllerRequest = {
  body?: any
}

export type ControllerResponse = {
  statusCode: number
  body?: any
}

export interface Controller {
  handle (request: ControllerRequest): Promise<ControllerResponse>
}
