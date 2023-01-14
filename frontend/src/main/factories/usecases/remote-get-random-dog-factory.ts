import { RemoteGetRandomDog } from '@/data/usecases/remote-get-random-dog'
import { makeAxiosHttpClient } from '../http'

export const makeRemoteGetRandomDog = (): RemoteGetRandomDog => {
  return new RemoteGetRandomDog(
    'https://random.dog/woof.json?filter=mp4,webm',
    makeAxiosHttpClient())
}
