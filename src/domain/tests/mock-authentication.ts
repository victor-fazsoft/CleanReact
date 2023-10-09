import { AuthenticationParams } from "domain/usecases/authentication";

export const mockAuthentication = (): AuthenticationParams => ({
    email: 'email123@email.com',
    password: 'password1234'
})