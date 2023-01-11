import { ClientParams } from '../../../domain/usecases'

export interface UpdateClientRepo {
  update (updateClientParams: ClientParams): Promise<void>
}
