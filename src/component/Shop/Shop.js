import React from 'react';
import { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = (props) => {
    const data = fakeData.slice(0,6);
    const [products] = useState(data);
    const [cart,setCart] = useState([]);

const handleAddClick = (product) =>{
  //console.log("product added",product)
  const newCart = [...cart,product];
  setCart(newCart);
}

    return (
        <div className='products'>
           <div className="products-container">
           {
             products.map(product =><Product handleAddClick ={handleAddClick} product={product}></Product>)
           }
           </div>
           <div className="cart-container">
            <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;
