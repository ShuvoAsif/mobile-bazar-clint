import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import verify from '../../../images/check.png'
import PrivateRoute from '../../../Routes/PrivateRoute';

const AddCard = ({ addmobile, setProduct }) => {

    const { _id, image, name, seller, location, resale_price, orginal_price, use_time, posted_time, seller_mail } = addmobile;


    const url = `https://mobile-resale-server-seven.vercel.app/userinfo?email=${seller_mail}`;

    const { data: sellerinfo = {} } = useQuery({
        queryKey: ['userinfo', seller_mail],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })



    const handleReport = () => {
        fetch(`https://mobile-resale-server-seven.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Report to admin is successful.')
                }
            })


    }

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
                    <div className="card-actions justify-between">
                        <button onClick={handleReport} className="btn btn-error">Report</button>
                        <label
                            onClick={() => setProduct(addmobile)}
                            htmlFor="booking-modal"
                            className="btn"
                        >Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCard;