import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../pages/Home/Shared/Loading/Loading';

const MyOrder = () => {
    const { user } = useContext(AuthContext);
    const url = `https://mobile-resale-server-seven.vercel.app/booking?email=${user.email}`;

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['orderss', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })


    const handleDeleteProduct = product => {
        fetch(`https://mobile-resale-server-seven.vercel.app/booking/${product._id}`, {
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
                                <td>{product?.isPaid !== true && <Link to={`/dashboard/payment/${product.productid}`}><button className='btn btn-xs btn-info'>Pay</button></Link>}{product?.isPaid === true && <button className='btn btn-xs  btn-success'>Paid</button>}</td>
                                <td>{product?.isPaid !== true && <button onClick={() => handleDeleteProduct(product)} className='btn btn-xs btn-error'>Delete This Order</button>}{product?.isPaid === true && <button className='btn btn-xs  btn-success' disabled>Delete This Order</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;