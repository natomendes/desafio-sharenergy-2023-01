export interface Encrypter {
  encrypt (username: string): Promise<string>
}
