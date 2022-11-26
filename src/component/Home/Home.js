import React from 'react';
import Header from '../Header/Header';
import Inventory from '../Inventory/Inventory';
import Review from '../Review/Review';
import Shop from '../Shop/Shop';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Shop></Shop>
            <Review></Review>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;