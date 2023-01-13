import { Users } from '@/presentation/pages'
import { makeRemoteLoadUsers } from '../usecases'

export const makeUser: React.FC = (): JSX.Element => {
  return (
    <Users
      loadUsers={makeRemoteLoadUsers()}
    />
  )
}
