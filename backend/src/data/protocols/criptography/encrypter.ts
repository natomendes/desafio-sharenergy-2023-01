export interface Encrypter {
  encrypt (username: string, id: string): Promise<string>
}
