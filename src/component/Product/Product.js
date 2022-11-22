import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {name,img,seller,price,stock} = props.product;
    return (
        
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
            <h1 className='product-name'>{name}</h1>
            <p><small>By:{seller}</small></p>
            <strong>${price}</strong>
            <p>Available Product {stock} - Order soon</p>
            <button onClick={ () => props.handleAddClick(props.product)} className='main-button'><FontAwesomeIcon icon={faShoppingCart}/> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;