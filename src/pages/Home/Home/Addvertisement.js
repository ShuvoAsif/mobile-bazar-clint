import React, { useEffect, useState } from 'react';
import AddCard from './AddCard';

const Addvertisement = () => {


    const [addmobiles, setaddmobiles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/addmobiles')
            .then(res => res.json())
            .then(data => setaddmobiles(data));
    }, [])



    return (
        <div className='bg-zinc-100 pb-3'>
            {
                addmobiles ?
                    <h1 className="text-4xl py-5 text-center font-bold">Advertised Items</h1>
                    :
                    <></>
            }
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                {
                    addmobiles.map(addmobile => <AddCard
                        key={addmobile._id}
                        addmobile={addmobile}
                    ></AddCard>)
                }
            </div>
        </div >
    );
};

export default Addvertisement;