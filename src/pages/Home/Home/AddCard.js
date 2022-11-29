import { useQuery } from '@tanstack/react-query';
import React from 'react';
import verify from '../../../images/check.png'

const AddCard = ({ addmobile }) => {

    const { image, name, seller, location, resale_price, orginal_price, use_time, posted_time, seller_mail } = addmobile;


    const url = `http://localhost:5000/userinfo?email=${seller_mail}`;

    const { data: sellerinfo = {} } = useQuery({
        queryKey: ['userinfo', seller_mail],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>

            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" className='bg-contain' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                        <div><p>Orginal Price: {orginal_price}</p></div><div><p>Resale Price: {resale_price}</p></div>
                    </div>
                    <h2>Location: {location}</h2>
                    <div className='flex justify-between'>
                        <div><p>Used of Years: {use_time}</p></div><div>Posted Time:{posted_time}</div>
                    </div>
                    <div className='flex'>
                        <h2>Seller's Name: {seller}</h2>
                        <div className="avatar">
                            <div className="w-5 h-5 mx-1 rounded-full">
                                {sellerinfo.verify === true && <img src={verify} alt='' />}
                            </div>
                        </div></div>
                    <div className="card-actions justify-end">
                        <button className="btn">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;