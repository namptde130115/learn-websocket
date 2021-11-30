import React, { lazy, Suspense } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Loading } from '../../components';
import NotFound from '../not-found';
import './style.less';

const SkillList = lazy(() => import('./list'));

const SkillPage = () => {
    const { path } = useRouteMatch();

    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Redirect path={`${path}`} to={`${path}/list`} exact />
                <Route path={`${path}/list`} component={SkillList} />
                <Route component={NotFound} /> 
            </Switch>
        </Suspense>
    );
};
export default SkillPage;
