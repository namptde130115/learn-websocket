import React from 'react';
import Hackathons from './hackathons';
import HackathonsContextProvider from './state/context';

import '../style.less';

const HackathonPage = () => {
    return (
        <HackathonsContextProvider>
            <Hackathons />
        </HackathonsContextProvider>
    );
}

export default HackathonPage;
