import { makeRemoteGetRandomDog } from '@/main/factories/usecases'
import { RandomDog } from '@/presentation/pages'

export const makeRandomDog: React.FC = (): JSX.Element => {
  return (
    <RandomDog
      getRandomDog={makeRemoteGetRandomDog()}
    />
  )
}
