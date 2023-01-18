import { FormContext } from '@/presentation/contexts'
import { classNames } from '@/presentation/utils'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { SubmitButton } from '../SubmitButton'
import { TextInput } from '../TextInput'

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const ClientModal: React.FC<Props> = ({ handleChange, handleSubmit }: Props) => {
  const { state, isOpen, setIsOpen } = useContext(FormContext)
  return (
    <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={() => { setIsOpen(!isOpen) }}>
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
                  onClick={() => { setIsOpen(!isOpen) }}
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
                      onChange={handleChange}
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
                      onChange={handleChange}
                    />

                    <SubmitButton text={state.id ? 'Editar Cliente' : 'Adicionar Cliente' }/>
                  </form>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
  )
}
