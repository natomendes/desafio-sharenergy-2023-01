import { makeRemoteLoadUsers } from '@/main/factories/usecases'
import { User } from '@/presentation/pages'

export const makeUser: React.FC = (): JSX.Element => {
  return (
    <User
      loadUsers={makeRemoteLoadUsers()}
    />
  )
}
