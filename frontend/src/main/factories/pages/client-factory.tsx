import { Client } from '@/presentation/pages'
import { makeRemoteAddClient, makeRemoteDeleteClient, makeRemoteUpdateClient } from '../usecases'
import { makeClientValidation } from '../validations/client-validation-factory'

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
