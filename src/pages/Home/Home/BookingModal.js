import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({ product, setProduct }) => {
    const { user } = useContext(AuthContext);
    const { _id, name, seller, resale_price } = product;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const buyerName = form.buyername.value;
        const email = form.buyeremail.value;
        const phone = form.buyerphone.value;
        const location = form.buyerlocation.value;
        const booking = {
            productid: _id,
            buyerName,
            email,
            phone,
            location,


        }

        /*
                fetch('http://localhost:5000/bookings', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(booking)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.acknowledged) {
                            toast.success('Booking confirmed');
                        }
                        else {
                            toast.error(data.message);
                        }
                    })
        
        */
        setProduct(null);
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setProduct(null)}
                        htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-3xl font-bold text-center text-sky-900">Product Name: {name}</h3>
                    <h3 className="text-3xl font-bold text-center text-sky-900">Seller Name: {seller}</h3>
                    <h3 className="text-3xl font-bold text-center text-sky-900">Product Price: {resale_price}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="buyername" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="buyeremail" type="email" defaultValue={user.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                        <input name="buyerphone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name="buyerlocation" type="text" placeholder="Meating Location" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-secondary w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;