import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  imgSrc: string
}

export const CatModal: React.FC<Props> = ({ isOpen, setIsOpen, imgSrc }) => {
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
          <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                    className="flex justify-center text-xs font-medium text-primary hover:text-vividBurgundy focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    onClick={() => { setIsOpen(!isOpen) }}
                  >
                    fechar
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-lg text-center font-medium leading-6 text-primary"
                >
                  Http Status Code
                </Dialog.Title>
                <div className="mt-2 rounded-2xl overflow-hidden">
                  <img src={imgSrc} alt="http status code cat image" />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
