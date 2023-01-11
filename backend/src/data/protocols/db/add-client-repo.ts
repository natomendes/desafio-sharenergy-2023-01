import { AddClientParams } from '../../../domain/usecases'

export interface AddClientRepo {
  add (addClientParams: AddClientParams): Promise<void>
}
