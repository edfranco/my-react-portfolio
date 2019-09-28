import React from 'react';
import './MobilePortfolioMenu.css';
const MobilePortfolioMenu = ({ handleClick, displayMenu }) => {
    return (
        <div className="mobile-menu mobile-portfolio-menu"
            style={displayMenu ? { display: 'block' } : { display: 'none' }} >
            <h1>Menu</h1>
            <h1 onClick={handleClick}>x</h1>
        </div>
    );
};

export default MobilePortfolioMenu;
