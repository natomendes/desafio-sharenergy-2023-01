import { User } from '@/presentation/pages'
import { makeRemoteLoadUsers } from '../usecases'

export const makeUser: React.FC = (): JSX.Element => {
  return (
    <User
      loadUsers={makeRemoteLoadUsers()}
    />
  )
}
