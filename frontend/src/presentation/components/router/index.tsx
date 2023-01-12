import { Login } from '@/presentation/pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  element: <Login />,
  path: '/'
}])

export const Router: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}
