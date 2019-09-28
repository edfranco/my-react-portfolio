import React from 'react';

import NavLinks from '../Nav/NavLinks';

const MobileMenu = () => {
    return (
        <div className="mobile-menu" style={this.state.displayMenu ? { display: 'block' } : { display: 'none' }}>
            <h1>Menu</h1>
            <h1 onClick={this.handleClick}>X</h1>
            <NavLinks />
        </div>
    );
};

export default MobileMenu;
