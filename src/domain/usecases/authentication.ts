import { AccountModel } from '../models/AccountModel'

type AuthenticationParams = {
    email: string,
    passwork: string
}

export interface Authentication {
    auth(params: AuthenticationParams): Promise<AccountModel>
}