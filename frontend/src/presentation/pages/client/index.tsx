import { ClientErrorState, clientErrorState, clientState, validateClientState } from './client-helper'
import { addClientMasksMapper, cpfMask, phoneMask, removeMask } from '@/presentation/utils'
import { ClientItem, Header, AddIcon, ClientModal } from '@/presentation/components'
import { AddClient, DeleteClient, UpdateClient, ClientModel } from '@/domain'
import { FormContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

type Props = {
  addClient: AddClient
  updateClient: UpdateClient
  deleteClient: DeleteClient
  validation: Validation
}

export const Client: React.FC<Props> = ({ addClient, updateClient, deleteClient, validation }: Props) => {
  const loadedClients = useLoaderData() as ClientModel[]
  const [clients, setClients] = useState(addClientMasksMapper(loadedClients))
  const [isOpen, setIsOpen] = useState(false)
  const [state, setState] = useState<ClientModel>(clientState)
  const [errorState, setErrorState] = useState<ClientErrorState>(clientErrorState)

  useEffect(() => { validateClientState(state, validation, errorState, setErrorState) }, [state])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'cpf') {
      setState({ ...state, [e.target.name]: cpfMask(e.target.value) })
    } else if (e.target.name === 'phone') {
      setState({ ...state, [e.target.name]: phoneMask(e.target.value) })
    } else {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  }

  const setFormData = (clientId?: string): void => {
    if (clientId) {
      const clientData = clients.find(({ id }) => id === clientId)
      setState({ id: clientData.id, name: clientData.name, cpf: clientData.cpf, email: clientData.email, phone: clientData.phone, address: clientData.address })
    } else {
      setState(clientState)
    }

    setIsOpen(!isOpen)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    if (!errorState.formInvalid) {
      const unmaskedClientData = { ...state, cpf: removeMask(state.cpf), phone: removeMask(state.phone) }

      let updatedClients = [] as ClientModel[]
      if (unmaskedClientData.id) {
        updatedClients = await updateClient.update(unmaskedClientData)
      } else {
        updatedClients = await addClient.add(unmaskedClientData)
      }
      setClients(addClientMasksMapper(updatedClients))

      setIsOpen(!isOpen)
    }
  }

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
            <div className="relative">
              <h2 className={`
                bg-white/25 w-full rounded-lg py-2.5
                text-lg text-center font-semibold leading-5 text-white
              `}>
                Lista de Clientes
              </h2>
              <div className="absolute top-0 right-0 bottom-0 p-1">
                <button
                  className="bg-cyan-500 rounded-lg"
                  onClick={() => { setFormData() }}
                >
                  <AddIcon />
                </button>
              </div>
            </div>
            <table className='w-full table-auto border-separate text-white'>
              <thead>
                <tr className="bg-white/[0.12]">
                  <th className='rounded-l-lg leading-7'>Nome</th>
                  <th>Cpf</th>
                  <th className='hidden md:table-cell'>Email</th>
                  <th className='hidden lg:table-cell'>Endereço</th>
                  <th className='hidden lg:table-cell rounded-tr-lg'>Telefone</th>
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
                      handleEdition={setFormData}
                    />
                  ))
                }
              </tbody>
            </table>
          </div>
          )}

        <FormContext.Provider value={{ state, setState, errorState, isOpen, setIsOpen }}>
          <ClientModal handleChange={handleChange} handleSubmit={handleSubmit}/>
        </FormContext.Provider>
      </main>
    </div>
  )
}
