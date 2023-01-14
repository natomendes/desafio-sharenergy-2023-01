import { RandomDog } from '@/presentation/pages'
import { makeRemoteGetRandomDog } from '../usecases'

export const makeRandomDog: React.FC = (): JSX.Element => {
  return (
    <RandomDog
      getRandomDog={makeRemoteGetRandomDog()}
    />
  )
}
