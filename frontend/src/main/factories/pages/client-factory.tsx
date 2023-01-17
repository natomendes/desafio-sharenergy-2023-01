import { Client } from '@/presentation/pages'
import { makeRemoteAddClient, makeRemoteDeleteClient } from '../usecases'
import { makeClientValidation } from '../validations/client-validation-factory'

export const makeClient: React.FC = (): JSX.Element => {
  return (
    <Client
      addClient={makeRemoteAddClient()}
      deleteClient={makeRemoteDeleteClient()}
      validation={makeClientValidation()}
    />
  )
}
