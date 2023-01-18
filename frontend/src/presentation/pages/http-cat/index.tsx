import { CatModal, Header } from '@/presentation/components'
import { classNames } from '@/presentation/utils'
import { httpStatus } from './htpp-status'
import { Tab } from '@headlessui/react'
import { useState } from 'react'

export const HttpCats: React.FC = () => {
  const [statusCode] = useState(httpStatus)
  const [imgSrc, setImgSrc] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const showImage = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setImgSrc(`https://http.cat/${event.currentTarget.name}`)
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-gradient-to-tr from-primary to-green-600/60 min-h-screen flex flex-col">
      <Header />
      <main className={`
        p-2 flex flex-col items-center gap-2 flex-grow
        lg:p-3 lg:max-w-5xl
        md:max-w-3xl
        mx-auto w-full
      `}
      >
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
              <Tab.Panel key={idx} className='rounded-xl bg-white p-2'>
                <ul className='flex flex-wrap gap-1'>
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
                      <button name={status} onClick={showImage} className='w-full h-full p-2' >
                        <h3 className="text-sm font-medium leading-5 text-vividBurgundy">
                          {status}
                        </h3>
                        <h2 className="text-xs text-secondary whitespace-prewrap">
                          {message}
                        </h2>
                      </button>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <CatModal isOpen={isOpen} setIsOpen={setIsOpen} imgSrc={imgSrc}/>
      </main>
    </div>
  )
}
