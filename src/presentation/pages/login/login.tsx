import React from 'react';
import Styles from './login-styles.scss'
import Spinner from '@/presentation/components/spinner/spinner';

const Login: React.FC = () => {
    return (
        <div className={Styles.login}>
            <header className={Styles.header}>
                <img src="" alt="" />
                <h1>4Dev - Enquetes para programadores</h1>
            </header>
            <form className={Styles.form} action="" >
                <h2>Login</h2>
                <input type="email" name="email" placeholder="email..." />
                <input type="password" name="password" placeholder="senha..." />
                <button type='submit'>Entrar</button>
                <span className={Styles.link}>Criar conta</span>
                <div className={Styles.errorWrap}>
                    <Spinner className={Styles.spinner}/>
                    <span className={Styles.error}>Erro</span>
                </div>
            </form>
            <footer className={Styles.footer}></footer>
        </div>
    )
}

export default Login