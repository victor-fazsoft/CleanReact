import { RemoteAuthentication } from "./remoteAuthentication"
import { HttpPostClientSpy } from "data/test/mock-http-client"

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient whit correct URL' , async () => {

        const url = 'any-url'
        const httpPostClient = new HttpPostClientSpy()
        const sut = new RemoteAuthentication(url, httpPostClient)
        await sut.auth()
        expect(httpPostClient.url).toBe(url)        
    })
})