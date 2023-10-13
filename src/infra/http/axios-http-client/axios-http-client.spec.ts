import { HttpPostParams } from '@/data/protocols/http'
import {AxiosHttpClient} from './AxiosHttpClient'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient()
    
}

const mockPostRequest = (): HttpPostParams<any> => ({
    url: 'any-url',
    body: {}
})

describe('AxiosHttpClient', () => {
    test('Shoud call axios with correct URL and verb', async () => {
        const request = mockPostRequest()
        const sut = makeSut()
        await sut.post(request)
        expect(mockedAxios.post).toHaveBeenCalledWith(request.url)
    })
    test('Shoud call axios with correct body', async () => {
        const sut = makeSut()
        await sut.post({ url: 'any_url'})
        expect(mockedAxios.post).toHaveBeenCalledWith('any_url')
    })
})