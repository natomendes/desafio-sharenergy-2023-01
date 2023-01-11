export interface UpdateAccessTokenRepo {
  updateAccessToken (accountId: string, accessToken: string): Promise<void>
}
