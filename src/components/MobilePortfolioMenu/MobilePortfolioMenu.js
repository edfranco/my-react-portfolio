import React from 'react';
import Aside from '../Aside/Aside';
import { PROJECTS } from '../../constants/constants';
import './MobilePortfolioMenu.css';

const MobilePortfolioMenu = ({ handleClick, displayMenu }) => {
    return (
        <div className="mobile-menu mobile-portfolio-menu"
            style={displayMenu ? { display: 'block' } : { display: 'none' }} >
            <div className="portfolio-menu">
                <div className="exit-button">
                    <div onClick={handleClick}>x</div>
                </div>
                <div className="cards-layout">
                    <Aside handleClick={handleClick} displayMenu={displayMenu} projects={PROJECTS} />
                </div>
            </div>
        </div>
    );
};

export default MobilePortfolioMenu;
