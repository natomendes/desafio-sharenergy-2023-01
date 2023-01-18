import { ChangePage, Header, SearchInput, UserItem } from '@/presentation/components'
import { LoadUsers } from '@/domain/usecases'
import { UserModel } from '@/domain/models'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'

type Props = {
  loadUsers: LoadUsers
}

export const User: React.FC<Props> = ({ loadUsers }: Props) => {
  const data = useLoaderData() as UserModel[] | null
  const [pageData, setPageData] = useState({ page: 1, users: data })
  const [searchParam, setSearchParam] = useState('')

  const { page, users } = pageData

  const filterUsers = (users: UserModel[]): UserModel[] => {
    return searchParam
      ? users.filter(({ name }: UserModel) => name.toLowerCase().startsWith(searchParam.toLowerCase()))
      : users
  }

  const getPage = async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
    const pageToGo = event.currentTarget.name === 'prev' ? page - 1 : page + 1
    if (pageToGo > 0) {
      const newUsers = await loadUsers.load(`${pageToGo}`)
      setPageData({ page: pageToGo, users: newUsers })
      setSearchParam('')
    }
  }

  return (
    <div className='bg-gradient-to-tr from-primary to-green-600/60 min-h-screen flex flex-col'>
      <Header />
      <main className={`
        p-2 flex flex-col items-center gap-2 flex-grow
        lg:p-3 lg:max-w-5xl
        mx-auto w-full
      `}>
        <div className='flex justify-between gap-1 w-full'>
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
