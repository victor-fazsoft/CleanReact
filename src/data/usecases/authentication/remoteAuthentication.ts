import { InvalidCredentialsError } from '@/domain/errors/InvalidCredentialsError';
import { HttpStatusCode, HttpResponse } from './../../protocols/http/http-response';
import { HttpPostClient } from "data/protocols/http/httpPostClient"
import { AuthenticationParams } from "domain/usecases/authentication"
import { UnexpectedError } from '@/domain/errors/UnexpectedError';
import { AccountModel } from '@/domain/models/AccountModel';

export class RemoteAuthentication {
    constructor(
        private readonly url: string,
        private readonly httpPostClient: HttpPostClient<AuthenticationParams, AccountModel>
    ) {}

    async auth(params: AuthenticationParams): Promise<void>{
        const httpResponse = await this.httpPostClient.post({
            url: this.url,
            body: params
        })
        switch (httpResponse.statusCode) {
            case HttpStatusCode.ok: break;
            case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
            case HttpStatusCode.badRequest: throw new UnexpectedError()
            default: throw new UnexpectedError()
        }
    }
}