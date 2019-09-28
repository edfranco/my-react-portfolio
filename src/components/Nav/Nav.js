import React from 'react';

import NavLinks from './NavLinks';
import './Nav.css'

const Nav = ({ handleClick }) => {
    return (
        <nav>
            <div className="mobile-button" onClick={handleClick}>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
                <div className="hamburger"></div>
            </div>
            <div>
                <h1>Eduardo Franco</h1>
            </div>
            <NavLinks />
        </nav>
    );
};

export default Nav
