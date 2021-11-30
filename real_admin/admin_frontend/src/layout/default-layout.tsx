import React, { FC, ReactNode, memo } from 'react';
import { Helmet } from 'react-helmet';
import './default-layout.less';
import constants from '../constants';

const DefaultLayout: FC<Props> = ({ children, title }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </>
    );
};

DefaultLayout.defaultProps = {
    title: constants.title,
};

type Props = {
    children: ReactNode;
    title?: string;
};
export default memo(DefaultLayout);
