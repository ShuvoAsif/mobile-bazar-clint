import React from 'react';

const MobileCard = ({ mobile }) => {


    const { image, name, location, resale_price, orginal_price, use_time, posted_time } = mobile;


    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Movie" className='bg-contain' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-end'>
                        <div><p>Orginal Price: {orginal_price}</p></div><div><p>Resale Price: {resale_price}</p></div>
                    </div>
                    <h2>Location: {location}</h2>
                    <div><p>Used: {use_time}</p></div><div>Posted Time:{posted_time}</div>

                    <div className="card-actions justify-end">
                        <button className="btn">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileCard;