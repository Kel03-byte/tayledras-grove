// Side Bar Component

import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './side-bar.css'

function SideBar() {
    return (
        <Menu>
            <nav>
                <ul>
                    <li><Link to='/' className='bm-item'>Home</Link></li>
                    <li><Link to='/about-us' className='bm-item'>About</Link></li>
                    <li><Link to='/stallion' className='bm-item'>Stallion</Link></li>
                    <li><Link to='/mares' className='bm-item'>Mares</Link></li>
                    <li><Link to='/progeny' className='bm-item'>Progeny</Link></li>
                    <li><Link to='/for-sale' className='bm-item'>For Sale</Link></li>
                    <li><Link to='/contact-us' className='bm-item'>Contact</Link></li>
                </ul>
            </nav>
        </Menu>
    );
};

export default SideBar;