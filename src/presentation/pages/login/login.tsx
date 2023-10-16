import React from 'react';
import Styles from './login-styles.scss'
import LoginHeader from '@/presentation/components/login-header/login-header'
import Footer from '@/presentation/components/footer/footer';
import Input from '@/presentation/components/input/input';
import FormStatus from '@/presentation/components/form-status/form-status';

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <LoginHeader />
            <form className={Styles.form} action="" >
                <h2>Login</h2>
                <Input type='email' name='email' placeholder='Email...'/>
                <Input type='password' name='password' placeholder='Senha...'/>
                <button type='submit'>Entrar</button>
                <span className={Styles.link}>Criar conta</span>
                <FormStatus />
            </form>
            <Footer />
        </div>
    )
}

export default Login