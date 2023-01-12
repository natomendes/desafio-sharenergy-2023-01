import { AccountModel } from '@/domain/models'
import { createContext } from 'react'

type Props = {
  saveCurrentAccount?: (account: AccountModel) => void
}

export const MainContext = createContext<Props>(null)
