import React, { useEffect, useState } from 'react';
import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components';
import Context from '@/presentation/context/form/form-context';
import { Validation } from '@/presentation/protocols/validation';


type Props = {
    validation: Validation
}

const Login: React.FC<Props> = ({ validation }: Props) => {
    const [state, setState] = useState({ 
        isLoading: false, 
        email: '',
        password: '',
        emailError: '',
        passwordError: '',
        mainError: '',
    });

    useEffect(() => {
        setState({
            ...state,
            emailError: validation.validate('email', state.email)
        })
        validation.validate( 'email', state.email)
    }, [state.email])

    useEffect(() => {
        setState({
            ...state,
            passwordError: validation.validate('password', state.password)
        })
        validation.validate( 'password', state.password)
    }, [state.password])

    return (
        <div className={Styles.login}>
            <LoginHeader />
            <Context.Provider value={{state, setState }}>
                <form className={Styles.form} action="" >
                    <h2>Login</h2>
                    <Input type='email' name='email' placeholder='Email...' />
                    <Input type='password' name='password' placeholder='Senha...' />
                    <button data-testid="submit" disabled={!!state.emailError || !!state.passwordError} className={Styles.submit} type='submit'>Entrar</button>
                    <span className={Styles.link}>Criar conta</span>
                    <FormStatus />
                </form>
            </Context.Provider>
            <Footer />
        </div>
    )
}

export default Login