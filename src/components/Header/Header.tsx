import React from "react";
import './Header.scss';
import logo from './logo.svg'

export const Header = () => (
    <header className="header">
        <div className="container">
            <div className="headerLogo">
                <img src={logo} className="appLogo" alt="logo" />
                <span className="headerTitle">Git Repos</span>
            </div>
        </div>
    </header>
    );

export default Header;
