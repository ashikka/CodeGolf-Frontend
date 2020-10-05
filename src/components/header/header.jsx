import React from 'react';

import header from '../../assets/header/header-image.png';

import './header.css';

const Header = () => (
    <div className="header">
        <img src={header} alt="Header" className="header-image" />
    </div>
);

export default Header;
