import { ClientModel } from '../../../domain/models'

export interface LoadClientByCpfRepo {
  loadByCpf (cpf: string): Promise<ClientModel>
}
