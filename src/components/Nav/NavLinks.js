import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <ul>
            <div className="nav-links">
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
            </div>
        </ul>
    );
};

export default NavLinks;
