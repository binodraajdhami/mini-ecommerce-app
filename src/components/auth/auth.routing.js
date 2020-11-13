import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Header from './../public/sections/header/Header';
import Footer from './../public/sections/footer/Footer';
import { Login } from './login/Login';
import { Register } from './register/Register';
import { ForgotPassword } from './forgotpassword/ForgotPassword';
import { ResetPassword } from './resetpassword/ResetPassword';
import PageNotFound from '../public/pages/pagenotfound/PageNotFound';

const authRouting = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Route exact path="/auth/forgot-password" component={ForgotPassword} />
                <Route exact path="/auth/reset-password" component={ResetPassword} />
                <Redirect path="/auth/" to="/auth/login" />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </>
    );
}

export default authRouting;