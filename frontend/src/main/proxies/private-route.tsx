import { MainContext } from '@/presentation/contexts'
import { useContext } from 'react'
import { Navigate, useOutlet } from 'react-router-dom'

export const PrivateRoute = (): JSX.Element => {
  const { loadCurrentAccount } = useContext(MainContext)
  const account = loadCurrentAccount()

  const outlet = useOutlet()

  return account?.accessToken ? outlet : <Navigate to="/login" replace={true} />
}
