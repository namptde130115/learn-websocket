import React from 'react';
import './style.less';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-tag.png';

function Logo() {
    return (
        <Link to="/" className="logo">
            <img src={logo} alt="ADMIN" />
        </Link>
    );
}

export default Logo;
