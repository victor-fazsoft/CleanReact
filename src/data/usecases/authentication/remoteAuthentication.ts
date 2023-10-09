import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError';
import { HttpStatusCode, HttpResponse } from './../../protocols/http/http-response';
import { HttpPostClient } from "data/protocols/http/httpPostClient"
import { Authentication, AuthenticationParams } from "domain/usecases/authentication"
import { UnexpectedError } from '@/domain/errors/UnexpectedError';
import { AccountModel } from '@/domain/models/AccountModel';

export class RemoteAuthentication implements Authentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
    ) {}

    async auth(params: AuthenticationParams): Promise<AccountModel>{
        const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: return httpResponse.body
            case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
            case HttpStatusCode.badRequest: throw new UnexpectedError()
            default: throw new UnexpectedError()
        }
    }
}