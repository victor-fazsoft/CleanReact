import { HttpPostParams } from '@/data/protocols/http'
import {AxiosHttpClient} from './AxiosHttpClient'
import axios from 'axios'
import { randomInt } from 'crypto'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
const mockedAxiosResult = {
    data: {},
    status: 20
}
mockedAxios.post.mockResolvedValue(mockedAxiosResult)

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient()
    
}

const mockPostRequest = (): HttpPostParams<any> => ({
    url: 'any-url',
    body: {}
})

describe('AxiosHttpClient', () => {
    test('Shoud call axios with correct URL and verb and body', async () => {
        const request = mockPostRequest()
        const sut = makeSut()
        await sut.post(request)
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body)
    })
    test('Shoud call axios with correct statusCode and body', async () => {
        const request = mockPostRequest()
        const sut = makeSut()
        const httpResponse = await sut.post(request)
        expect(httpResponse).toEqual({
            statusCode: mockedAxiosResult.status,
            body: mockedAxiosResult.data
        })
    })
})