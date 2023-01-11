export type AuthenticationParams = {
  username: string
  password: string
}

export interface Authentication {
  auth (authParams: AuthenticationParams): Promise<string>
}
