import React from 'react';
import Addvertisement from './Addvertisement';
import Banner from './Banner';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Addvertisement></Addvertisement>
            <Category></Category>
        </div>
    );
};

export default Home;