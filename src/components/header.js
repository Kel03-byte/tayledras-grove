// Header Component

import React from 'react';
import Logo from '../images/tg-logo.jpg'

function Header () {
    return (
        <header>
            <img id="tg-logo" src={Logo} alt="Tayledras Grove Logo"></img>
        </header>
    );
};

export default Header;