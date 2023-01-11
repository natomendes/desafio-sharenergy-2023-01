export interface DeleteClientRepo {
  delete(clientId: string): Promise<void>
}
