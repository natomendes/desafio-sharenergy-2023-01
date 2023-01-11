export type AuthenticationParams = {
  usernamne: string
  password: string
}

export interface Authentication {
  auth (authParams: AuthenticationParams): Promise<string>
}
