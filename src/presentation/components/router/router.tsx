import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Login } from '@/presentation/pages';

const router = () => {
    return ( 
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login}></Route>
        </Switch>
        </BrowserRouter>
     );
}
 
export default router;