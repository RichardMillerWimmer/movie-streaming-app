import React from 'react'
import { Link } from 'react-router-dom';
import Search from './Search';

import '../styles/Header.scss';

import user from '../images/user.png';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <div className='logo'>Movie App</div>
            </Link>
            <Search />
            <div className='user-image'>
                <img src={user} alt='user profile' />
            </div>
        </header>
    )
}

export default Header
