import { mockAuthentication } from './../../../domain/tests/mock-authentication';
import { RemoteAuthentication } from "./remoteAuthentication"
import { HttpPostClientSpy } from "../../test/mock-http-client"

type SutTypes = {
    sut: RemoteAuthentication
    httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any-url'): SutTypes => {
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    return {
        sut,
        httpPostClientSpy
    }
}
 
describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient whit correct URL' , async () => {
        const url = 'other-url'
        const { sut, httpPostClientSpy } = makeSut(url)
        await sut.auth(mockAuthentication())
        expect(httpPostClientSpy.url).toBe(url)        
    })
})

describe('RemoteAuthentication', () => {
    test('Should call HttpPostClient whit correct body' , async () => {
        const { sut, httpPostClientSpy } = makeSut()
        const authenticationParams = mockAuthentication()
        await sut.auth(authenticationParams)
        expect(httpPostClientSpy.body).toEqual(authenticationParams)        
    })
})