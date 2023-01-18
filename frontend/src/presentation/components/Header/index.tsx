import { DropdownMenu } from '@/presentation/components'
import logo from '@/assets/images/logo_color.png'
import { useLocation } from 'react-router-dom'
import { classNames } from '@/presentation/utils'

export const Header: React.FC = () => {
  const path = useLocation().pathname
  return (
    <header className={`
    bg-gradient-to-tr from-gray-200 to-white p-3 shadow
    flex justify-end max-h-12
    border-t-4 border-primary
  `}>
      <div className={classNames(
        'max-w-5xl mx-auto w-full flex items-center relative',
        path === '/login' ? 'justify-end' : 'justify-between'
      )}
      >
        { path !== '/login' && <DropdownMenu />}
        <img
          src={logo}
          alt="Sharenergy logo"
          className={`
          w-1/2 max-w-[200px]
        `}
        />
      </div>
  </header>
  )
}
