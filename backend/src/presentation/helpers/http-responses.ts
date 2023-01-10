import { ServerError } from '../error/server-error'
import { ControllerResponse } from '../protocols/controller'

export const badRequest = (error: Error): ControllerResponse => ({
  statusCode: 400,
  body: error
})

export const ok = (data: any): ControllerResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (): ControllerResponse => ({
  statusCode: 200,
  body: new ServerError()
})
