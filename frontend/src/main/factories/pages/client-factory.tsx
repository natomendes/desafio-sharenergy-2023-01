import { makeRemoteAddClient, makeRemoteDeleteClient, makeRemoteUpdateClient } from '@/main/factories/usecases'
import { makeClientValidation } from '@/main/factories/validations'
import { Client } from '@/presentation/pages'

export const makeClient: React.FC = (): JSX.Element => {
  return (
    <Client
      addClient={makeRemoteAddClient()}
      updateClient={makeRemoteUpdateClient()}
      deleteClient={makeRemoteDeleteClient()}
      validation={makeClientValidation()}
    />
  )
}
