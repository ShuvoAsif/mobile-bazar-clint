import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';

const Category = () => {


    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    return (
        <div className='bg-zinc-100 pb-3'>
            <div className='text-center pb-5 pt-3'>
                <p className="text-3xl font-bold">Mobile Categories</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>

        </div>
    );
};

export default Category;