import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../../pages/Home/Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
    const productinfo = useLoaderData();
    const navigation = useNavigation();

    const { product, resale_price } = productinfo;
    console.log(productinfo)

    if (navigation.state === "loading") {
        return <Loading></Loading>
    }
    console.log(productinfo)
    return (
        <div className='px-10'>
            <h3 className='text-3xl font-bold text-center text-sky-900'>Payment for {product}</h3>
            <p className='text-xl font-bold text-center text-sky-900'>Please pay <strong>${resale_price}</strong> for your selected item</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        productinfo={productinfo}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;