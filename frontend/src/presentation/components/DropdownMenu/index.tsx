import { CatIcon, ClientIcon, DogIcon, LogoutIcon, ThreeDashesIcon, UsersIcon } from '@/presentation/components'
import { MainContext } from '@/presentation/contexts'
import { Popover } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

export const DropdownMenu: React.FC = () => {
  const navigate = useNavigate()
  const { clearCurrentAccount } = useContext(MainContext)
  const logout = (): void => {
    clearCurrentAccount()

    navigate('/login', { replace: true })
  }

  return (
  <Popover>
    <Popover.Button>
      <ThreeDashesIcon className='w-6 h-6 text-primary' />
    </Popover.Button>
    <Popover.Panel className={`
      absolute z-10 shadow-lg
    `}>
      <div className={`
        flex flex-col p-1 w-[200px] mt-2 rounded-b
        bg-gradient-to-tr from-gray-200 to-white
      `}>
        <button
          onClick={() => { navigate('/') }}
          className={`
            flex gap-2 items-center p-1 rounded group
            text-sm text-primary leading-8
            hover:bg-primary hover:text-white focus:outline-primary
          `}
        >
          <UsersIcon className='w-4 text-primary group-hover:text-white' />
          Usuários
        </button>
        <button
          onClick={() => { navigate('/http-cats') }}
          className={`
            flex gap-2 items-center p-1 rounded group
            text-sm text-primary leading-8
            hover:bg-primary hover:text-white focus:outline-primary
          `}
        >
          <CatIcon className='w-4 text-primary group-hover:text-white' />
          Http Cat
        </button>
        <button
          onClick={() => { navigate('/random-dog') }}
          className={`
            flex gap-2 items-center p-1 rounded group
            text-sm text-primary leading-8
            hover:bg-primary hover:text-white focus:outline-primary
          `}
        >
          <DogIcon className='w-4 text-primary group-hover:text-white' />
          Random Dog
        </button>
        <button
          onClick={() => { navigate('/clients') }}
          className={`
            flex gap-2 items-center p-1 rounded group
            text-sm text-primary leading-8
            hover:bg-primary hover:text-white focus:outline-primary
          `}
        >
          <ClientIcon className='w-4 text-primary group-hover:text-white'/>
          Clientes
        </button>
        <button
          onClick={logout}
          className={`
            flex gap-2 items-center p-1 rounded group
            text-sm text-vividBurgundy leading-8
            hover:bg-yellowOrange hover:text-white focus:outline-vividBurgundy
          `}
        >
          <LogoutIcon className='w-4 text-vividBurgundy group-hover:text-white' />
          Sair
        </button>
      </div>
    </Popover.Panel>
  </Popover>
  )
}
