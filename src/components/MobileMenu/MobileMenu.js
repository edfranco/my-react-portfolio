import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';


const MobileMenu = ({ displayMenu, handleClick }) => {
    return (
        <div className="mobile-menu" style={displayMenu ? { display: 'block' } : { display: 'none' }}>
            <div className="mobile-layout">
                <div className="mobile-header">
                    <h1 onClick={handleClick}>X</h1>
                </div>

                <ul className="mobile-links">
                    <NavLink to="/">
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <li>Portfolio</li>
                    </NavLink>
                    <NavLink to="/resume">
                        <li>Resume</li>
                    </NavLink>
                    <NavLink to="/contact">
                        <li>Contact</li>
                    </NavLink>
                    <a href="http://www.linkedin.com/in/edfrancocano">
                        <li><i className="fab fa-linkedin-in"></i></li>
                    </a>
                    <a href="http://www.github.com/edfranco">
                        <li><i className="fab fa-github"></i></li>
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;
