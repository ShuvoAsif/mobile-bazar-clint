import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MobileCard from './MobileCard';

const Mobiles = () => {
    const mobiles = useLoaderData();
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3">'>
            {
                mobiles.map(mobile => <MobileCard
                    key={mobile._id}
                    mobile={mobile}
                ></MobileCard>)
            }
        </div>
    );
};

export default Mobiles;