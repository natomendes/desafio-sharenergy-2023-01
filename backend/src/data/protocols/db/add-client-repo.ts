import { ClientParams } from '../../../domain/usecases'

export interface AddClientRepo {
  add (addClientParams: ClientParams): Promise<void>
}
