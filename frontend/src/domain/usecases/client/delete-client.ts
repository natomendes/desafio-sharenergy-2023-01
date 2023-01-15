export interface DeleteClient {
  delete (clientId: string): Promise<void>
}
