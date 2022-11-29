import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/sellers');
            const data = await res.json();
            console.log(data)
            return data;
        }
    });

    const handleDeletUser = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch();
                }
            })

    }


    const handleVerify = id => {

    }

    return (
        <div className='m-5'>
            <h2 className="text-3xl p-3 font-bold text-center">All Sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name ? user.name : <>Registered Whitout Name</>}</td>
                                <td>{user.email}</td>
                                <td>{user?.verify !== true && <button onClick={() => handleVerify(user._id)} className='btn btn-xs btn-info'>Verify</button>}{user?.verify === true && <button className='btn btn-xs disabled btn-success'>Verified</button>}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleDeletUser(user._id)} className='btn btn-xs btn-error'>Delete This Seller</button>}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSeller;