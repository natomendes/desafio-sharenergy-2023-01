import { ClientModel } from '@/domain/models'
import { DeleteClient } from '@/domain/usecases'

type Props = ClientModel & {
  deleteClient: DeleteClient
  setClients: React.Dispatch<React.SetStateAction<ClientModel[]>>
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
          <button className="p-1 bg-yellowOrange/70 rounded">
            <svg className='w-4 fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.707,5.893l-3.6-3.6a1,1,0,0,0-1.414,0l-12.6,12.6a.988.988,0,0,0-.241.391l-1.8,5.4A1,1,0,0,0,3,22a1.014,1.014,0,0,0,.316-.051l5.4-1.8a.991.991,0,0,0,.39-.242l12.6-12.6A1,1,0,0,0,21.707,5.893ZM7.86,18.326,4.581,19.419,5.674,16.14,17.4,4.414,19.586,6.6Z"></path></g></svg>
          </button>
          <button
            className="p-1 bg-red-400/70 rounded"
            onClick={handleDelete}
          >
            <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M8 5L8.11111 5C9.03159 5 9.77778 4.25381 9.77778 3.33333C9.77778 3.14924 9.92702 3 10.1111 3L13.8889 3C14.073 3 14.2222 3.14924 14.2222 3.33333C14.2222 4.25381 14.9684 5 15.8889 5H16" stroke="#ffffff" strokeWidth="2"></path> <path d="M18 9L17.2292 18.2491C17.0997 19.804 15.7999 21 14.2396 21H9.7604C8.20013 21 6.90033 19.804 6.77076 18.2491L6 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
          </button>
        </div>
      </td>
    </tr>
  )
}
