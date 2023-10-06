import { RemoteAuthentication } from "./remoteAuthentication"
import { HttpPostClient } from "data/protocols/http/httpPostClient"

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient whit correct URL' , async () => {
        class HttpPostClientSpy implements HttpPostClient {
            url?: string
            async post(url: string): Promise<void> {
                this.url = url
                return Promise.resolve()
            }
        }
        const url = 'any-url'
        const httpPostClient = new HttpPostClientSpy()
        const sut = new RemoteAuthentication(url, httpPostClient)
        await sut.auth()
        expect(httpPostClient.url).toBe(url)        
    })
})