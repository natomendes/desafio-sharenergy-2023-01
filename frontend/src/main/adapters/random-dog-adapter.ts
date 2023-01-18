import { makeRemoteGetRandomDog } from '@/main/factories/usecases'

export const randomDogLoader = async (): Promise<string> => {
  const url = await makeRemoteGetRandomDog().get()

  return url
}
