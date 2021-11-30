import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthLayout } from '../../layout';

import Login from '../login/Login';
import NotFound from '../not-found';
import './auth-page.less';

interface Props {}

const AuthPage = (props: Props) => {

    return (
        <AuthLayout>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route component={Login} path="/login" />

                <Route component={NotFound} />
            </Switch>
        </AuthLayout>
    );
};

export default AuthPage;
