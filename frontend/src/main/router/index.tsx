import { MainContext } from '@/presentation/contexts'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { setCurrentAccountAdapter } from '../adapters'
import { makeLogin } from '../factories/pages'

const router = createBrowserRouter([{
  element: makeLogin({}),
  path: '/'
}])

export const Router: React.FC = () => {
  const state = {
    saveCurrentAccount: setCurrentAccountAdapter
  }

  return (
    <MainContext.Provider value={state}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}
