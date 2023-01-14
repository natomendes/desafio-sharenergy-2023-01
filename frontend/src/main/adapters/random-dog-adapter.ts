import { makeRemoteGetRandomDog } from '../factories/usecases'

export const randomDogLoader = async (): Promise<string> => {
  const url = await makeRemoteGetRandomDog().get()

  return url
}
