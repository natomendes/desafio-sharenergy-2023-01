import { makeRemoteAuthentication } from '@/main/factories/usecases'
import { Login } from '@/presentation/pages'

export const makeLogin: React.FC = (): JSX.Element => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
    />
  )
}
