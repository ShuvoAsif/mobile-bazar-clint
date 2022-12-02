import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {
    const { data: products = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('https://mobile-resale-server-seven.vercel.app/reporteditems');
            const data = await res.json();
            console.log(data)
            return data;
        }
    });



    const handleDeleteProduct = product => {
        fetch(`https://mobile-resale-server-seven.vercel.app/reportedproduct/${product._id}`, {
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

    return (
        <div>
            <div className='m-5'>
                <h2 className="text-3xl p-3 font-bold text-sky-900 text-center">My Products</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i) => <tr key={product._id}>
                                    <th>{i + 1}</th>
                                    <td><div className="avatar">
                                        <div className="w-24 rounded">
                                            <img src={product.image} alt="" />
                                        </div>
                                    </div></td>
                                    <td>{product.name}</td>
                                    <td>{<button onClick={() => handleDeleteProduct(product)} className='btn btn-xs btn-error'>Delete This Product</button>}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ReportedItems;