import { HttpPostClient, HttpPostParams } from "data/protocols/http/httpPostClient"
import { HttpResponse, HttpStatusCode } from "../protocols/http/http-response"

export class HttpPostClientSpy implements HttpPostClient {
    url?: string
    body?: object
    response: HttpResponse = { statusCode: HttpStatusCode.ok}

    async post(params: HttpPostParams): Promise<HttpResponse> {
        this.url = params.url
        this.body = params.body
        return Promise.resolve(this.response)
    }
}