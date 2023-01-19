import { makeRemoteAuthentication } from '@/main/factories/usecases'
import { Login } from '@/presentation/pages'
import { makeLoginValidation } from '../validations'

export const makeLogin: React.FC = (): JSX.Element => {
  return (
    <Login
      authentication={makeRemoteAuthentication()}
      validation={makeLoginValidation()}
    />
  )
}
