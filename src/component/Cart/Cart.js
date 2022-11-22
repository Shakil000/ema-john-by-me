import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,product) => total + product.price, 0);
    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }
    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }
    let tax = (totalPrice / 5).toFixed(2);
    const grandTotal =(totalPrice + shipping + Number(tax)).toFixed(2);
    return (
        <div>
           <h1>Order Review</h1>
            <h2>Your Order:{cart.length}</h2>
            <p>Items:{cart.length}</p>
            <p>Shipping & Handeling:{shipping}</p>
            <p>Total before tax:{tax}</p>
            <p>Estimated Tax:{tax}</p>
            <h1>Order Total:{grandTotal}</h1>
            <button className='main-button2'><FontAwesomeIcon icon={faShoppingCart}/> Review Order</button> 
        </div>
    );
};

export default Cart;