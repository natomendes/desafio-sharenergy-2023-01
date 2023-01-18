import { DropdownMenu } from '@/presentation/components'
import logo from '@/assets/images/logo_color.png'

export const Header: React.FC = () => {
  return (
    <header className={`
    bg-gradient-to-tr from-gray-200 to-white p-3 shadow
    flex justify-end max-h-12
    border-t-4 border-primary
  `}>
      <div className="max-w-5xl mx-auto w-full flex justify-between items-center relative">
        <DropdownMenu />
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
