import { Client } from '@/presentation/pages'
import { makeRemoteAddClient, makeRemoteDeleteClient } from '../usecases'

export const makeClient: React.FC = (): JSX.Element => {
  return (
    <Client
      addClient={makeRemoteAddClient()}
      deleteClient={makeRemoteDeleteClient()}
    />
  )
}
