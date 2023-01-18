import { makeAxiosHttpClient } from '@/main/factories/http'
import { RemoteGetRandomDog } from '@/data/usecases'

export const makeRemoteGetRandomDog = (): RemoteGetRandomDog => {
  return new RemoteGetRandomDog(
    'https://random.dog/woof.json?filter=mp4,webm',
    makeAxiosHttpClient())
}
