import { ClientModel } from '@/domain/models'
import { AddClient, DeleteClient, UpdateClient } from '@/domain/usecases'
import { ClientItem, Header, SubmitButton, TextInput } from '@/presentation/components'
import { AddIcon } from '@/presentation/components/Icons'
import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { FormContext } from '@/presentation/contexts'
import { Validation } from '@/presentation/protocols'
import { classNames } from '@/presentation/utils'
import { addClientMasksMapper, cpfMask, phoneMask, removeMask } from '@/presentation/utils/input-masks'

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
  const [state, setState] = useState<ClientModel>({ id: '', name: '', cpf: '', email: '', phone: '', address: '' })
  const [errorState, setErrorState] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    address: '',
    errorMessage: '',
    formInvalid: true
  })

  useEffect(() => {
    const { id, ...formData } = state
    const nameError = validation.validate('name', formData)
    const cpfError = validation.validate('cpf', formData)
    const emailError = validation.validate('email', formData)
    const addressError = validation.validate('address', formData)
    const phoneError = validation.validate('phone', formData)

    setErrorState({
      ...errorState,
      name: nameError,
      cpf: cpfError,
      email: emailError,
      address: addressError,
      phone: phoneError,
      formInvalid: !!nameError || !!cpfError || !!emailError || !!addressError || !!phoneError
    })
  }, [state])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => { setState({ ...state, [e.target.name]: e.target.value }) }

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>): void => { setState({ ...state, [e.target.name]: cpfMask(e.target.value) }) }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => { setState({ ...state, [e.target.name]: phoneMask(e.target.value) }) }

  const handleAdition = (): void => {
    setState({ id: '', name: '', cpf: '', email: '', phone: '', address: '' })
    toggleModal()
  }

  const handleEdition = (clientId: string): void => {
    const clientData = clients.find(({ id }) => id === clientId)
    setState({ id: clientData.id, name: clientData.name, cpf: clientData.cpf, email: clientData.email, phone: clientData.phone, address: clientData.address })
    toggleModal()
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

      toggleModal()
    }
  }

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
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
                  onClick={() => { handleAdition() }}
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
                      handleEdition={handleEdition}
                    />
                  ))
                }
              </tbody>
            </table>
          </div>
          )}

        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toggleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                  <div className="absolute top-5 right-7">
                    <button
                      type="button"
                      className={classNames(
                        'flex justify-center text-xs font-medium text-primary hover:text-vividBurgundy',
                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                      )}
                      onClick={toggleModal}
                    >
                      fechar
                    </button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg text-center font-medium leading-6 text-primary"
                  >
                    { state.id ? 'Editar Cliente' : 'Adicionar Cliente' }
                  </Dialog.Title>
                  <div className="w-full mt-4">
                    <FormContext.Provider value={{ state, setState, errorState }}>
                      <form className="space-y-5" onSubmit={handleSubmit}>
                        <TextInput
                          type="text"
                          placeholder="Nome"
                          name="name"
                          className="auto-complete-white"
                          onChange={handleChange}
                        />
                        <TextInput
                          type="text"
                          placeholder="CPF"
                          name="cpf"
                          value={state.cpf}
                          className="auto-complete-white"
                          onChange={handleCpfChange}
                        />
                        <TextInput
                          type="email"
                          placeholder="E-mail"
                          name="email"
                          value={state.email}
                          className="auto-complete-white"
                          onChange={handleChange}
                        />
                        <TextInput
                          type="text"
                          placeholder="Endereço"
                          name="address"
                          value={state.address}
                          className="auto-complete-white"
                          onChange={handleChange}
                        />
                        <TextInput
                          type="text"
                          placeholder="Telefone"
                          name="phone"
                          value={state.phone}
                          className="auto-complete-white"
                          onChange={handlePhoneChange}
                        />

                        <SubmitButton text={state.id ? 'Editar Cliente' : 'Adicionar Cliente' }/>
                      </form>
                    </FormContext.Provider>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      </main>
    </div>
  )
}
