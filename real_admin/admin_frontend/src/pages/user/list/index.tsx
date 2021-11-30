import React from 'react';
import Users from './users';
import UsersContextProvider from './state/context';

import '../style.less';

const UserPage = () => {
    return (
        // <UsersContextProvider>
            <Users />
        // </UsersContextProvider>
    );
}

export default UserPage;
