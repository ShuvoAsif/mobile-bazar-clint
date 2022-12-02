import React from 'react';
import Addvertisement from './Addvertisement';
import Banner from './Banner';
import Buyfromus from './Buyfromus';
import Category from './Category';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Addvertisement></Addvertisement>
            <Category></Category>
            <Buyfromus></Buyfromus>
        </div>
    );
};

export default Home;