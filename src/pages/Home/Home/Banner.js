import React from 'react';
import img from '../../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen  bg-zinc-300">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <img src={img} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl font-bold">We are the bigest online mobile resale eCommerce website</h1>
                    <p className="py-6 text-5xl">You can buy and sell second hand mobile here.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;