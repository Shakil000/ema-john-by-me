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
            <a href="Shop.js">Shop</a>
            <a href="Review.js">Review</a>
            <a href="Inventory.js">Inventory</a>
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