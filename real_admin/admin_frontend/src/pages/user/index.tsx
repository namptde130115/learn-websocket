import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Loading } from '../../components';
import NotFound from '../not-found';
import './style.less';

const UserList = lazy(() => import('./list'));
const UserDetail = lazy(() => import('./detail'));

const UserPage = () => {
    const { path } = useRouteMatch();

    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Redirect path={`${path}`} to={`${path}/list`} exact />
                <Route path={`${path}/list`} component={UserList} />
                <Route path={`${path}/user/:userId`} exact component={UserDetail} />
                <Route component={NotFound} /> 
            </Switch>
        </Suspense>
    );
};
export default UserPage;
