import React, { lazy, Suspense, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Loading } from '../../components';
import { useEagerConnect, useInactiveListener } from '../../hook/web3Hooks';
import DashboardLayout from '../../layout/dashboard-layout';
import HackathonPage from '../hackathon';
import HostPage from '../host';
import NotFound from '../not-found';
import SkillPage from '../skill';
import SmartContractPage from '../smart-contract';
import ThemePage from '../theme';

import UserPage from '../user';


interface Props {}

declare global {
    interface Window {
        OneSignal: any;
    }
}

const Dashboard = (props: Props) => {
    // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
    const triedEager = useEagerConnect();
    // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
    useInactiveListener(!triedEager);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <DashboardLayout>
            <Suspense fallback={<Loading full />}>
                <Switch>
                    <Redirect exact from="/" to="/users" />
                    <Route path="/users">
                        <UserPage />
                    </Route>
                    <Route path="/hackathons">
                        <HackathonPage />
                    </Route>
                    <Route path="/skills">
                        <SkillPage />
                    </Route>
                    <Route path="/hosts">
                        <HostPage />
                    </Route>
                    <Route path="/themes">
                        <ThemePage />
                    </Route>
                    <Route path="/smart-contract">
                        <SmartContractPage />
                    </Route>

                    <Route component={NotFound} />
                </Switch>
            </Suspense>
        </DashboardLayout>
    );
};

export default Dashboard;
