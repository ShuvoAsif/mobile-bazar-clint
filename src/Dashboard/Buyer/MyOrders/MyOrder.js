import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../../pages/Home/Shared/Loading/Loading';

const MyOrder = () => {

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orderss'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/booking`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    });


    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/booking/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product.product} deleted successfully`)
                }
            })
    }


    const handlePay = () => {

    }



    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='m-5'>
            <h2 className="text-3xl p-3 font-bold text-sky-900 text-center">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Pay</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{product.product}</td>
                                <td>{product?.isPaid !== true && <button onClick={() => handlePay(product)} className='btn btn-xs btn-info'>Pay</button>}{product?.isPaid === true && <button className='btn btn-xs  btn-success'>Pied</button>}</td>
                                <td>{<button onClick={() => handleDeleteProduct(product)} className='btn btn-xs btn-error'>Delete This Order</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;