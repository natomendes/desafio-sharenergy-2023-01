import { AddClient, ClientParams } from '../../domain/usecases'
import { CpfInUseError } from '../../presentation/errors'
import { AddClientRepo } from '../protocols'
import { LoadClientByCpfRepo } from '../protocols/db/load-client-by-cpf-repo'

export class DbAddClient implements AddClient {
  constructor (
    private readonly loadClientByCpfRepo: LoadClientByCpfRepo,
    private readonly addClientRepo: AddClientRepo
  ) {}

  async add (addClientParams: ClientParams): Promise<void> {
    const client = await this.loadClientByCpfRepo.loadByCpf(addClientParams.cpf)
    if (client) throw new CpfInUseError()

    await this.addClientRepo.add(addClientParams)
  }
}
