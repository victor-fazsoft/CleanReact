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
    const errorMEssage = "Email validatin error, please verify email and try again"
    validationSpy.errorMessage = errorMEssage
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
        expect(emailStatus.title).toBe(validationSpy.errorMessage)
        expect(emailStatus.textContent).toBe('🔴')

        const passwordStatus = sut.getByTestId('password-status')
        expect(passwordStatus.title).toBe('Campo obrigatório')
        expect(passwordStatus.textContent).toBe('🔴')

    })

    test('Should call validation with correct email', () => {
        const { sut, validationSpy } = makeSut()

        const emailInput = sut.getByTestId('email')
        fireEvent.input(emailInput, { target: { value: 'any-email' } })

        expect(validationSpy.fieldName).toBe('email');
        expect(validationSpy.fieldValue).toBe('any-email');
    })

    
    test('Should call validation with correct password', () => {
        const { sut, validationSpy } = makeSut();
    
        const passwordInput = sut.getByTestId('password');
        fireEvent.input(passwordInput, { target: { value: 'any-password' } });
    
        expect(validationSpy.fieldName).toBe('password');
        expect(validationSpy.fieldValue).toBe('any-password');
    });

    test('Should show email error if validation fails', () => {
        const { sut, validationSpy } = makeSut();
        const emailInput = sut.getByTestId('email');
        fireEvent.input(emailInput, { target: { value: 'any-email' } });
        const emailStatus = sut.getByTestId('email-status')
        expect(emailStatus.title).toBe(validationSpy.errorMessage)
        expect(emailStatus.textContent).toBe('🔴')
    });

    

})