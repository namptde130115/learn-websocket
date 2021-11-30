import { CaretDownFilled, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown, Menu, Space, Typography } from 'antd';
import { get } from 'lodash';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useEagerConnect, useInactiveListener } from '../../customhook/web3Hooks';
import { logout } from '../../reducers/authState/authAction';
import { IStorageState } from '../../reducers/authState/authReducer';
import WalletConnector from '../wallet';
import ModalChangePassword from './modal-change-password';

const HeaderRight = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [visible, setVisible] = useState(false);
    const user = useSelector(({ auth }: { auth: IStorageState }) => auth.user);

    const menuOnClick = async (value: any) => {
        await dispatch(logout());
        history.push('/login');
        return;
    };

    const changePassword = () => {
        setVisible(true)
    }

    const menu = (
        <Menu className="user-menu">
            <WalletConnector></WalletConnector>
            <p></p>
            <Button
                onClick={changePassword}
                color="info"
            >
                Change Password
            </Button>
            <p></p>
            <Button
                onClick={menuOnClick}
                color="info"
            >
                Logout
            </Button>

        </Menu>
    );
    return (
        <>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
                <div className="user-dropdown">
                    <Space>
                        <Typography.Text>{`Admin `}</Typography.Text>
                        <CaretDownFilled style={{ fontSize: 12 }} />
                    </Space>
                </div>
            </Dropdown>
            <ModalChangePassword visible={visible} setVisible={setVisible} />
        </>

    );
};

export default HeaderRight;
