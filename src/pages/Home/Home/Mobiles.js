import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import MobileCard from './MobileCard';

const Mobiles = () => {
    const mobiles = useLoaderData();
    const [product, setProduct] = useState(null);

    console.log(product)

    return (
        <section>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 bg-zinc-300 py-11'>
                {
                    mobiles.map(mobile => <MobileCard
                        key={mobile._id}
                        mobile={mobile}
                        setProduct={setProduct}

                    ></MobileCard>)
                }
            </div>
            {
                product &&
                <BookingModal
                    setProduct={setProduct}
                    product={product}
                ></BookingModal>
            }
        </section>
    );
};

export default Mobiles;