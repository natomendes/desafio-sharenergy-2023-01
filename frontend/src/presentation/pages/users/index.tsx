import logo from '@/assets/images/logo_color.png'
import { SearchInput } from '@/presentation/components'

export const Users: React.FC = () => {
  return (
    <div className={`
      bg-gradient-to-tr from-primary to-green-600/60
      min-h-screen flex flex-col
    `}>
      <header className={`
        bg-gradient-to-tr from-gray-200 to-white p-3 shadow
        flex justify-end
      `}>
          <img
            src={logo}
            alt="Sharenergy logo"
            className={`
            w-1/2
          `}
          />
      </header>
      <main className={`
        p-2 flex flex-col items-center gap-2 flex-grow
      `}>
        <SearchInput />
        <ul className={`
          flex flex-col w-full
        `}>
          {/* <UserItem /> */}
        </ul>
      </main>
    </div>
  )
}
