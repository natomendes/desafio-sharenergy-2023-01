import { PencilIcon, TrashIcon } from '@/presentation/components'
import { ClientModel } from '@/domain/models'
import { DeleteClient } from '@/domain/usecases'

type Props = ClientModel & {
  deleteClient: DeleteClient
  setClients: React.Dispatch<React.SetStateAction<ClientModel[]>>
  handleEdition: (clientId: string) => void
}

export const ClientItem: React.FC<Props> = (props: Props) => {
  const handleDelete = async (): Promise<void> => {
    await props.deleteClient.delete(props.id)

    props.setClients((prevClients) => {
      return prevClients.filter(({ id }) => id !== props.id)
    })
  }

  return (
    <tr className='text-center odd:bg-white/[0.25] even:bg-white/[0.12]'>
      <td className='rounded-l-lg leading-7'>{ props.name }</td>
      <td>{ props.cpf }</td>
      <td className='hidden md:table-cell'>{ props.email }</td>
      <td className='hidden lg:table-cell text-[12px]'>{ props.address }</td>
      <td className='hidden lg:table-cell'>{ props.phone }</td>
      <td className='rounded-r-lg'>
        <div className='flex gap-1 justify-center'>
          <button
            className="p-1 bg-yellowOrange/70 rounded group hover:bg-yellowOrange/90 hover:shadow"
            onClick={() => { props.handleEdition(props.id) }}
          >
            <PencilIcon className='w-4 fill-white group-hover:fill-orange-600' />
          </button>
          <button
            className="p-1 bg-red-400/70 rounded group hover:bg-red-400/90 hover:shadow"
            onClick={handleDelete}
          >
            <TrashIcon className="w-4 text-white group-hover:text-red-700 hover:text-red-400/90" />
          </button>
        </div>
      </td>
    </tr>
  )
}
