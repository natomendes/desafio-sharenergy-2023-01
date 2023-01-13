import logo from '@/assets/images/logo_color.png'
import { UserModel } from '@/domain/models'
import { SearchInput, UserItem } from '@/presentation/components'
import { useLoaderData } from 'react-router-dom'

export const Users: React.FC = () => {
  const users = useLoaderData() as UserModel[] | null
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
          {
            users?.map((user: UserModel) => <UserItem key={user.username} {...user } />)
          }
        </ul>
      </main>
    </div>
  )
}
