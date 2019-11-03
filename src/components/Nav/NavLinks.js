import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <ul>
            <div className="nav-links" >
                <NavLink to="/about">
                    <li>About</li>
                </NavLink>
                <NavLink to="/resume">
                    <li>Resume</li>
                </NavLink>
                <NavLink to="/contact">
                    <li>Contact</li>
                </NavLink>
            </div>
        </ul>
    );
};

export default NavLinks;
