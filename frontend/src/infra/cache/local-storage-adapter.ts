import { ClearStorage, GetStorage, SetStorage } from '@/data/protocols/cache'

export class LocalStorageAdapter implements SetStorage, GetStorage, ClearStorage {
  set (key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get (key: string): any {
    return JSON.parse(localStorage.getItem(key))
  }

  clear (key: string): void {
    localStorage.removeItem(key)
  }
}
