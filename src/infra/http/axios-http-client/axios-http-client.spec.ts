import {AxiosHttpClient} from './AxiosHttpClient'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => {
    test('Shoud call axios with correct URL', async () => {
        const sut = new AxiosHttpClient()
        await sut.post({ url: 'any_url'})
        expect(mockedAxios).toHaveBeenCalledWith('any_url')
    })
})