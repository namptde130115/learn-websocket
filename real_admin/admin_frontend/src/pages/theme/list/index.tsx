import React from 'react';
import Themes from './themes';
import ThemesContextProvider from './state/context';

import '../style.less';

const ThemePage = () => {
    return (
        <ThemesContextProvider>
            <Themes />
        </ThemesContextProvider>
    );
}

export default ThemePage;
