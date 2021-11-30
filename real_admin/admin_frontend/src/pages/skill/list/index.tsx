import React from 'react';
import Skills from './skills';
import SkillsContextProvider from './state/context';

import '../style.less';

const SkillPage = () => {
    return (
        <SkillsContextProvider>
            <Skills />
        </SkillsContextProvider>
    );
}

export default SkillPage;
