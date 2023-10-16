import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Login } from '@/presentation/pages'
import '@/presentation/styles/global.scss'

const router = () => {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" Component={Login}></Route>
        </Routes>
        </BrowserRouter>
     );
}
 
export default router;