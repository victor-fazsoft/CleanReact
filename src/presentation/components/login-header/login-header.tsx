import React, { memo } from 'react';
import {Logo} from  '@/presentation/components'
import Styles from './login-header-styles.scss'

const LoginHeader = () => {
    return ( 
        <header className={Styles.header}>
        <Logo />
        <h1>4Dev - Enquetes para programadores</h1>
    </header>
     );
}
 
export default memo(LoginHeader);