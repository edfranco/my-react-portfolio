import React from 'react';
import { NavLink } from 'react-router-dom';


const NavLinks = () => {
    return (
        <ul>
            <div className="nav-links" >
                <a href="#portfolio">
                    <li>Portfolio</li>
                </a>
                <a href="#resume">
                    <li>Resume</li>
                </a>
                <a href="#contact">
                    <li>Contact</li>
                </a>
            </div>
        </ul>
    );
};

export default NavLinks;
