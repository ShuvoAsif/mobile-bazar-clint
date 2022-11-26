import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {

    const { cat_id, image, name } = category;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" className='w-1/2' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${cat_id}`}>
                            <button className="btn">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;