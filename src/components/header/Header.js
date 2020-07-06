import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../asset/crown.svg'
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                   SHOP
                </Link>
                <Link className="contact" to="/contact">
                    CONTACT
                </Link>
                <Link className="signin" to="/signin">
                    SIGN IN
                </Link>
            </div>
        </div>
    )
}

export default Header;