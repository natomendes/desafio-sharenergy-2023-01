import logo from '@/assets/images/logo_color.png'
import { UserModel } from '@/domain/models'
import { LoadUsers } from '@/domain/usecases/load-users'
import { ChangePage, SearchInput, UserItem } from '@/presentation/components'
import { MainContext } from '@/presentation/contexts'
import { useContext, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

type Props = {
  loadUsers: LoadUsers
}

export const Users: React.FC<Props> = ({ loadUsers }: Props) => {
  const data = useLoaderData() as UserModel[] | null
  const { loadCurrentAccount } = useContext(MainContext)
  const [searchParam, setSearchParam] = useState('')
  const [pageData, setPageData] = useState({
    page: 1,
    users: data
  })

  const { page, users } = pageData

  const filterUsers = (users: UserModel[]): UserModel[] => {
    if (!searchParam) return users

    return users.filter(({ name }: UserModel) => name.toLowerCase().startsWith(searchParam.toLowerCase()))
  }

  const getPage = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    const buttonEl = event.currentTarget as HTMLButtonElement
    console.log(buttonEl)
    const pageToGo = buttonEl.name === 'prev' ? page - 1 : page + 1
    if (pageToGo > 0) {
      const account = loadCurrentAccount()
      const newUsers = await loadUsers.load(`${pageToGo}`, account.accessToken)
      setPageData({
        page: pageToGo,
        users: newUsers
      })
      setSearchParam('')
    }
  }

  return (
    <div className={`
      bg-gradient-to-tr from-primary to-green-600/60
      min-h-screen flex flex-col
    `}>
      <header className={`
        bg-gradient-to-tr from-gray-200 to-white p-3 shadow
        flex justify-end max-h-12
      `}>
          <div className="max-w-5xl mx-auto w-full">
            <img
              src={logo}
              alt="Sharenergy logo"
              className={`
              w-1/2 max-w-[200px]
            `}
            />
          </div>
      </header>
      <main className={`
        p-2 flex flex-col items-center gap-2 flex-grow
        lg:p-3 lg:max-w-5xl
        mx-auto
      `}>
        <div className={`
          flex justify-between gap-1 w-full
        `}>
          <ChangePage name="prev" prev={true} disabled={page === 1} onClick={getPage} />
          <SearchInput searchParam={searchParam} setSearchParam={setSearchParam } />
          <ChangePage name="next" prev={false} onClick={getPage} />
        </div>
        <ul className={`
          flex flex-col w-full gap-2 sm:max-w-md
          lg:flex-row lg:flex-wrap lg:max-w-full lg:gap-6
          lg:content-start lg:p-6
        `}>
          {
            filterUsers(users)?.map((user: UserModel) => <UserItem key={user.username} {...user } />)
          }
        </ul>
      </main>
    </div>
  )
}
