import React from 'react';
import offer from '../../../images/offer.jpg'
const Buyfromus = () => {
    return (
        <div className="text-center  bg-zinc-100">
            <h1 className="text-4xl py-5 text-center pt-5 font-bold">WHY BUY FROM US</h1>
            <h3 className="text-3xl py-5 text-center pb-5 font-bold">Since 2013, MOBILE BAZAR has been the best selling and most loved  Phone market. Now at version 2022, it brings many new and revolutionary features such as advertisement, live call support and chat in online to the customer. we ensure quality. We have completed 5000+ orders</h3>
            <img src={offer} alt="" className='w-full pt-9 px-3' />
        </div>
    );
};

export default Buyfromus;