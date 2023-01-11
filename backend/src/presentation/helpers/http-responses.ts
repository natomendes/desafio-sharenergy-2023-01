import { ServerError, UnauthorizedError } from '../errors'
import { ControllerResponse } from '../protocols'

export const badRequest = (error: Error): ControllerResponse => ({
  statusCode: 400,
  body: error
})

export const unauthorized = (): ControllerResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const ok = (data: any): ControllerResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (): ControllerResponse => ({
  statusCode: 500,
  body: new ServerError()
})
