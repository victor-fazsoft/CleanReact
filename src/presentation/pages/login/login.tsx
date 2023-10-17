import React, { useState } from 'react';
import Styles from './login-styles.scss'
import { Footer, FormStatus, Input, LoginHeader } from '@/presentation/components';
import Context from '@/presentation/context/form/form-context';

interface StateStatus {
    isLoading: boolean
    errorMessage: string
}

const Login: React.FC = () => {
    const [state, setState] = useState({ isLoading: false, errorMessage: '' });
    return (
        <div className={Styles.login}>
            <LoginHeader />
            <Context.Provider value={state}>
                <form className={Styles.form} action="" >
                    <h2>Login</h2>
                    <Input type='email' name='email' placeholder='Email...' />
                    <Input type='password' name='password' placeholder='Senha...' />
                    <button type='submit'>Entrar</button>
                    <span className={Styles.link}>Criar conta</span>
                    <FormStatus />
                </form>
            </Context.Provider>
            <Footer />
        </div>
    )
}

export default Login