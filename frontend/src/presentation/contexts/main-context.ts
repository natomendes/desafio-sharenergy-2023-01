import { AccountModel } from '@/domain/models'
import { createContext } from 'react'

export type MainContextProps = {
  saveCurrentAccount?: (account: AccountModel) => void
  loadCurrentAccount?: () => AccountModel
  clearCurrentAccount?: () => void
}

export const MainContext = createContext<MainContextProps>(null)
