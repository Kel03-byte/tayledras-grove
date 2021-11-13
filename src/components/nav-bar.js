// Navigation Bar Component

import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className='NavBar'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/stallion'>Stallion</Link></li>
                <li><Link to='/mares'>Mares</Link></li>
                <li><Link to='/progeny'>Progeny</Link></li>
                <li><Link to='/for-sale'>For Sale</Link></li>
                <li><Link to='/contact-us'>Contact Us</Link></li>
            </ul>
        </nav>
    )
};

export default Nav;