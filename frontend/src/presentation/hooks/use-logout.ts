import { clearCurrentAccountAdapter } from '@/main/adapters'
import { browserRouter } from '@/main/router'

type ResultType = () => void

export const useLogout = (): ResultType => {
  return (): void => {
    clearCurrentAccountAdapter()
    browserRouter.navigate('/login', { replace: true })
  }
}
