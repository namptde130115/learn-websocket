import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Loading } from '../../components';
import NotFound from '../not-found';
import './style.less';

const HackathonList = lazy(() => import('./list'));

const HackathonPage = () => {
    const { path } = useRouteMatch();

    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Redirect path={`${path}`} to={`${path}/list`} exact />
                <Route path={`${path}/list`} component={HackathonList} />
                <Route component={NotFound} /> 
            </Switch>
        </Suspense>
    );
};
export default HackathonPage;
