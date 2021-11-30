import React, { FC, memo, ReactNode } from 'react';
import { Header } from '../components';
import './default-layout.less';
import { Layout } from 'antd';
import Sider from '../components/sider';
import { useSelector } from 'react-redux';
import { IState } from '../store/rootReducer';
import classNames from 'classnames';

type Props = {
    children: ReactNode;
};
const DashboardLayout: FC<Props> = ({ children }) => {
    const isCollapsed = useSelector((state: IState) => state.global.isCollapsed);

    return (
        <Layout>
            <Sider />
            <Layout
                className={classNames('site-layout', { 'is-collapsed': isCollapsed })}
            >
                <Header />
                <Layout.Content style={{ overflow: 'initial' }}>
                    <div className="wrap">{children}</div>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default memo(DashboardLayout);
