export class UnexpectedError extends Error {
    constructor () {
        super("An error ocurred")
        this.name = 'UnexpectedError'
    }
}