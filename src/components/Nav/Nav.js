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
            <div className="my-logo">
                <a href="#landing">
                    <h1>Eduardo Franco</h1>
                </a>
                <a className="social-link" href="http://www.linkedin.com/in/edfrancocano">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="social-link" href="http://www.github.com/edfranco">
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <NavLinks />
        </nav>
    );
};

export default Nav
