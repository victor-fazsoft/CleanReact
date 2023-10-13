import { HttpPostParams } from "../protocols/http";

export const mockPostRequest = (): HttpPostParams<any> => ({
    url: 'any-url',
    body: {}
})