import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import Loading from '../../../pages/Home/Shared/Loading/Loading';

const MyProducts = () => {

    const { user } = useContext(AuthContext);


    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/myproducts?email=${user?.email}`);
            const data = await res.json();
            console.log(data)
            return data;
        }
    });


    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/mobile/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${product.name} deleted successfully`)
                }
            })
    }


    const handleAdvertise = product => {
        fetch(`http://localhost:5000/mobiles/${product._id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Verified successful.')
                    refetch();
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='m-5'>
            <h2 className="text-3xl p-3 font-bold text-sky-900 text-center">My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Advertise</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product?.is_add !== true && <button onClick={() => handleAdvertise(product)} className='btn btn-xs btn-info'>Advertise THis Item</button>}{product?.is_add === true && <button className='btn btn-xs  btn-success'>Allready Advertised</button>}</td>
                                <td>{<button onClick={() => handleDeleteProduct(product)} className='btn btn-xs btn-error'>Delete This Product</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;