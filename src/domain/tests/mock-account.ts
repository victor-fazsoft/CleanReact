import { AuthenticationParams } from "domain/usecases/";
import { AccountModel } from "../models";

export const mockAuthentication = (): AuthenticationParams => ({
    email: 'email123@email.com',
    password: 'password1234'
})

export const mockAccountModel = (): AccountModel => ({
    accessToken: "123123-fdwfds-2342343"
    
})