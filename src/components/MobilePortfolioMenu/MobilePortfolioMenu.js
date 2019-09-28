import React from 'react';
import Aside from '../Aside/Aside';
import { PROJECTS } from '../../constants/constants';
import './MobilePortfolioMenu.css';

const MobilePortfolioMenu = ({ handleClick, displayMenu }) => {
    return (
        <div className="mobile-menu mobile-portfolio-menu"
            style={displayMenu ? { display: 'block' } : { display: 'none' }} >
            <div>
                <h1 onClick={handleClick}>x</h1>
                <Aside handleClick={handleClick} displayMenu={displayMenu} projects={PROJECTS} />
            </div>
        </div>
    );
};

export default MobilePortfolioMenu;
