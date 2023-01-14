import { MainContext, MainContextProps } from '@/presentation/contexts'
import { HttpCats } from '@/presentation/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { clearCurrentAccountAdapter, getCurrentAccountAdapter, setCurrentAccountAdapter } from '../adapters'
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
}, {
  element: <PrivateRoute />,
  path: '/http-cats',
  children: [{
    path: '/http-cats',
    element: <HttpCats />
  }]
}])

export const Router: React.FC = () => {
  const state: MainContextProps = {
    saveCurrentAccount: setCurrentAccountAdapter,
    loadCurrentAccount: getCurrentAccountAdapter,
    clearCurrentAccount: clearCurrentAccountAdapter
  }

  return (
    <MainContext.Provider value={state}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}
