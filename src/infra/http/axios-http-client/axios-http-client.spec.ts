import { HttpPostParams } from '@/data/protocols/http'
import {AxiosHttpClient} from './AxiosHttpClient'
import { mockAxios } from '@/infra/test'
import axios from 'axios'
import { mockPostRequest } from '@/data/test/mock-http-post'

jest.mock('axios')

type SutTypes = {
    sut: AxiosHttpClient,
    mockedAxios: jest.Mocked<typeof axios>
}
const makeSut = (): SutTypes => {
    const sut = new AxiosHttpClient()
    const mockedAxios = mockAxios()
    return {
        sut,
        mockedAxios
    }
}

describe('AxiosHttpClient', () => {
    test('Shoud call axios with correct URL and verb and body', async () => {
        const request = mockPostRequest()
        const {sut, mockedAxios } = makeSut()
        await sut.post(request)
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })
    test('Shoud call axios with correct statusCode and body', () => {
        const {sut, mockedAxios } = makeSut()
        const promise = sut.post(mockPostRequest())
        expect(promise).toEqual(mockedAxios.post.mock.results[0].value)
    })
})