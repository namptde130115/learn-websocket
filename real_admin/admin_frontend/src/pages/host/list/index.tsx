import React from 'react';
import Hosts from './hosts';
import HostsContextProvider from './state/context';

import '../style.less';

const HostPage = () => {
    return (
        <HostsContextProvider>
            <Hosts />
        </HostsContextProvider>
    );
}

export default HostPage;
