import { ClientParams } from './add-client'

export interface UpdateClient {
  update (updateClientParams: ClientParams): Promise<void>
}
