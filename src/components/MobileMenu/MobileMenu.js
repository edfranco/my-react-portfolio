import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.css';


const MobileMenu = ({ displayMenu, handleClick }) => {
    return (
        <div className="mobile-menu" style={displayMenu ? { display: 'block' } : { display: 'none' }}>
            <div className="mobile-layout">
                <div className="exit-button">
                    <div className="exit-button-icon" onClick={handleClick}>x</div>
                </div>

                <ul className="mobile-nav-links">
                    <NavLink to="/" onClick={handleClick}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/portfolio" onClick={handleClick}>
                        <li>Portfolio</li>
                    </NavLink>
                    <NavLink to="/resume" onClick={handleClick}>
                        <li>Resume</li>
                    </NavLink>
                    <NavLink to="/contact" onClick={handleClick}>
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
