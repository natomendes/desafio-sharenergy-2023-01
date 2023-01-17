import { ClientModel } from '../../domain/models'
import { AddClient, ClientParams } from '../../domain/usecases'
import { CpfInUseError } from '../../presentation/errors'
import { AddClientRepo, LoadClientsRepo } from '../protocols'
import { LoadClientByCpfRepo } from '../protocols/db/load-client-by-cpf-repo'

export class DbAddClient implements AddClient {
  constructor (
    private readonly loadClientByCpfRepo: LoadClientByCpfRepo,
    private readonly addClientRepo: AddClientRepo,
    private readonly loadClientsRepo: LoadClientsRepo
  ) {}

  async add (addClientParams: ClientParams): Promise<ClientModel[]> {
    const client = await this.loadClientByCpfRepo.loadByCpf(addClientParams.cpf)
    if (client) throw new CpfInUseError()

    await this.addClientRepo.add(addClientParams)

    return await this.loadClientsRepo.loadAll()
  }
}
