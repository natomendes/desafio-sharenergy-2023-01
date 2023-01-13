import { MainContext } from '@/presentation/contexts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters'
import { loadUsersAdapter } from '../adapters/load-users-adapter'
import { makeLogin, makeUser } from '../factories/pages'
import { PrivateRoute } from '../proxies/private-route'

const router = createBrowserRouter([{
  element: makeLogin({}),
  path: '/login'
}, {
  element: <PrivateRoute />,
  path: '/',
  children: [{
    path: '/',
    element: makeUser({}),
    loader: loadUsersAdapter
  }]
}])

export const Router: React.FC = () => {
  const state = {
    saveCurrentAccount: setCurrentAccountAdapter,
    loadCurrentAccount: getCurrentAccountAdapter
  }

  return (
    <MainContext.Provider value={state}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}
