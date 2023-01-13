import logo from '@/assets/images/logo_color.png'
import picture from '@/assets/images/75.jpg'
import { SearchInput } from '@/presentation/components/SearchInput'

export const Users: React.FC = () => {
  return (
    <div className={`
      bg-gradient-to-tr from-primary to-green-600/60
      h-screen flex flex-col
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
          <ul className='flex-grow w-full grid grid-flow-row grid-rows-10 gap-1 overflow-auto'>
            <li className={`
              rounded-lg overflow-hidden flex bg-white/70
              border-primary border-2 shadow
            `}>
                <img src={picture} alt="" className='max-h-full'/>
              <div className='p-2 text-gray-800 text-[12px] font-roboto flex-grow'>
                <p>Nome: João da Nobrega</p>
                <p>Idade: 35</p>
                <p>Email: joaodanobrega@gmail.com</p>
                <p>Username: Johzin</p>
              </div>
            </li>
          </ul>
      </main>
    </div>
  )
}
