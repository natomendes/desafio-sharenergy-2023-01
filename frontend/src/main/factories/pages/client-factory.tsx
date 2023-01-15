import { Client } from '@/presentation/pages'
import { makeRemoteDeleteClient } from '../usecases'

export const makeClient: React.FC = (): JSX.Element => {
  return (
    <Client
      deleteClient={makeRemoteDeleteClient()}
    />
  )
}
