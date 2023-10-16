import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Login from './login'

type StateProps = {
    isLoading: boolean
}
describe('Login component', () => {
    const [state, setState] = useState<StateProps>({ isLoading: false});
    test('', () => {
    const {getByTestId} = render(<Login/ >)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
    })
})