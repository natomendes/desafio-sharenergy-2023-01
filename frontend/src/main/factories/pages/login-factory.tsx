import { Login } from '@/presentation/pages'
import { makeRemoteAuthentication } from '../usecases'

export const makeLogin: React.FC = (): JSX.Element => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
    />
  )
}
