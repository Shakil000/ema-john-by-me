import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
            <a href="/shops">Shop</a>
            <a href="/review">Review</a>
            <a href="/inventory">Inventory</a>
            <a href='/login'>Login</a>
            </nav>
            <div className='search-box'>
            <input type="search" placeholder='type here to search'/>
            <button type="button">Submit </button> 
            <strong className='icon'><FontAwesomeIcon icon={faShoppingCart}/></strong>
            </div>
        </div>
    );
};

export default Header;