import {AxiosHttpClient} from './AxiosHttpClient'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => {
    return new AxiosHttpClient()
    
}

describe('AxiosHttpClient', () => {
    test('Shoud call axios with correct URL', async () => {
        const sut = makeSut()
        await sut.post({ url: 'any_url'})
        expect(mockedAxios).toHaveBeenCalledWith('any_url')
    })
})