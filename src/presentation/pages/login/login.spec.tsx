import React, { useState } from 'react';
import { RenderResult, render, fireEvent, cleanup } from '@testing-library/react';
import Login from './login'
import { ValidationSpy } from '@/presentation/test';
interface SutTypes {
    sut: RenderResult
    validationSpy: ValidationSpy
}



const makeSut = (): SutTypes => {
    const validationSpy = new ValidationSpy()
    validationSpy.errorMessage = "Validatin error, please verify and try again"
    const sut = render(<Login validation={validationSpy} />)
    return {
        sut,
        validationSpy
    }
}

describe('Login component', () => {
    afterEach(cleanup)

    test('Should start with initial state', () => {
        const { sut, validationSpy } = makeSut()
        const errorWrap = sut.getByTestId('error-wrap')
        expect(errorWrap.childElementCount).toBe(0)
        const submitButton = sut.getByTestId('submit') as HTMLButtonElement
        expect(submitButton.disabled).toBe(true);
        const emailStatus = sut.getByTestId('email-status')
        //expect(emailStatus.title).toBe(validationSpy.errorMessage)
        //expect(emailStatus.textContent).toBe('🔴')
        const passwordStatus = sut.getByTestId('password-status')
        //expect(passwordStatus.title).toBe(validationSpy.errorMessage)
        //expect(passwordStatus.textContent).toBe('🔴')

    })



    test('Should show email error if validation fails', () => {
        const { sut, validationSpy } = makeSut();
        const emailInput = sut.getByTestId('email');
        fireEvent.input(emailInput, { target: { value: 'any-email' } });
        const emailStatus = sut.getByTestId('email-status')
        expect(emailStatus.title).toBe(validationSpy.errorMessage)
        expect(emailStatus.textContent).toBe('🔴')
    });

    test('Should show password error if validation fails', () => {
        const { sut, validationSpy } = makeSut();
        const passwordInput = sut.getByTestId('password');
        fireEvent.input(passwordInput, { target: { value: 'any-password' } });
        const passwordStatus = sut.getByTestId('password-status')
        expect(passwordStatus.title).toBe(validationSpy.errorMessage)
        expect(passwordStatus.textContent).toBe('🔴')
    });  
    
    test('Should show valid password state if Validation succeeds', () => {
        const { sut, validationSpy } = makeSut();
        validationSpy.errorMessage = null
        const passwordInput = sut.getByTestId('password');
        fireEvent.input(passwordInput, { target: { value: 'any-password' } });
        const passwordStatus = sut.getByTestId('password-status')
        expect(passwordStatus.title).toBe('All right')
        expect(passwordStatus.textContent).toBe('🟢')
    }); 

})