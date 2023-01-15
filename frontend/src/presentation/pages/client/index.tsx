import { ClientModel } from '@/domain/models'
import { DeleteClient } from '@/domain/usecases'
import { ClientItem, Header } from '@/presentation/components'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

type Props = {
  deleteClient: DeleteClient
}

export const Client: React.FC<Props> = ({ deleteClient }: Props) => {
  const loadedClients = useLoaderData() as ClientModel[]
  const [clients, setClients] = useState(loadedClients)
  return (
    <div className={`
      bg-gradient-to-tr from-primary to-green-600/60
      min-h-screen flex flex-col
    `}>
      <Header />
      <main className={`
        p-2 flex flex-col items-center gap-2 flex-grow
        lg:p-3 lg:max-w-5xl
        mx-auto w-full
      `}>
        {
          clients.length !== 0 && (
          <div className="rounded-xl space-y-1 bg-primary/40 p-1 w-full shadow">
            <h2 className={`
              bg-white/25 w-full rounded-lg py-2.5
              text-lg text-center font-semibold leading-5 text-white
            `}>
              Lista de Clientes
            </h2>
            <table className='w-full table-auto border-separate text-white'>
              <thead>
                <tr className="bg-white/[0.12]">
                  <th className='rounded-l-lg leading-7'>Nome</th>
                  <th>Cpf</th>
                  <th className='hidden md:table-cell'>Email</th>
                  <th className='hidden lg:table-cell'>Endereço</th>
                  <th className='hidden lg:table-cell'>Telefone</th>
                  <th className='opacity-0 rounded-r-lg'>
                    <div className='flex gap-1 justify-end'>
                      <button className="p-1 bg-yellowOrange/70 rounded">
                        <svg className='w-4 fill-white' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21.707,5.893l-3.6-3.6a1,1,0,0,0-1.414,0l-12.6,12.6a.988.988,0,0,0-.241.391l-1.8,5.4A1,1,0,0,0,3,22a1.014,1.014,0,0,0,.316-.051l5.4-1.8a.991.991,0,0,0,.39-.242l12.6-12.6A1,1,0,0,0,21.707,5.893ZM7.86,18.326,4.581,19.419,5.674,16.14,17.4,4.414,19.586,6.6Z"></path></g></svg>
                      </button>
                      <button className="p-1 bg-red-400/70 rounded">
                        <svg className="w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 5H19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M8 5L8.11111 5C9.03159 5 9.77778 4.25381 9.77778 3.33333C9.77778 3.14924 9.92702 3 10.1111 3L13.8889 3C14.073 3 14.2222 3.14924 14.2222 3.33333C14.2222 4.25381 14.9684 5 15.8889 5H16" stroke="#ffffff" strokeWidth="2"></path> <path d="M18 9L17.2292 18.2491C17.0997 19.804 15.7999 21 14.2396 21H9.7604C8.20013 21 6.90033 19.804 6.77076 18.2491L6 9" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm'>
                {
                  clients.map((client) => (
                    <ClientItem
                      {...client}
                      key={client.id}
                      deleteClient={deleteClient}
                      setClients={setClients}
                    />
                  ))
                }
              </tbody>
            </table>
          </div>
          )}
      </main>
    </div>
  )
}
