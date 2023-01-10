import { LoadUsersController } from '../../../presentation/controllers/load-users-controller'
import { Controller } from '../../../presentation/protocols/controller'
import { makeRemoteLoadUsers } from '../usecases/remote-load-users-factory'

export const makeLoadUsersController = (): Controller => {
  return new LoadUsersController(makeRemoteLoadUsers())
}
