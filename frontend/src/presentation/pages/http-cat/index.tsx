import { Header } from '@/presentation/components'
import { Dialog, Tab, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { httpStatus } from './htpp-status'

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}

export const HttpCats: React.FC = () => {
  const [statusCode] = useState(httpStatus)
  const [imgSrc, setImgSrc] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
  }

  const showImage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setImgSrc(`https://http.cat/${event.currentTarget.name}`)
    toggleModal()
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
        md:max-w-3xl
        mx-auto w-full
      `}>
      <Tab.Group>
          <Tab.List className="flex space-x-1 rounded-xl bg-primary/40 p-1 w-full">
            {Object.keys(statusCode).map((code) => (
              <Tab
                key={code}
                className={({ selected }) =>
                  classNames(
                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-primary',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-primary focus:outline-none focus:ring-2',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                {`${code}xx`}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2 w-full">
            {Object.values(statusCode).map((values, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-white p-2'
                )}
              >
                <ul
                  className={classNames(
                    'flex flex-wrap gap-1'
                  )}>
                  {values.map(({ status, message }) => (
                    <li
                      key={status}
                      className={classNames(
                        'relative rounded-md hover:bg-primary/20 basis-5/12 flex-grow',
                        'flex flex-col items-center text-center justify-start',
                        'border border-primary/20',
                        'md:basis-[30%] md:max-w-[243px]',
                        'lg:basis-[20%]'
                      )}
                    >
                      <button
                        name={status}
                        onClick={showImage}
                        className={classNames(
                          'w-full h-full p-2'
                        )}
                      >
                        <h3 className="text-sm font-medium leading-5 text-vividBurgundy">
                          {status}
                        </h3>
                        <h2 className="text-xs text-secondary whitespace-prewrap">{message}</h2>
                      </button>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
            <div className="absolute t-2 r-2">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={toggleModal}
              >
                Got it, thanks!
              </button>
            </div>
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
                      onClick={toggleModal}
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
      </main>
    </div>
  )
}
