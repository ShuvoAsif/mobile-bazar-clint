import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    console.log(user)
    const { data: users = [] } = useQuery({
        queryKey: ['users', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/oneuser?email=${user.email}`);
            const data = await res.json();
            return data;
        }
    })

    const role = users[0]
    console.log(role)

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }

    const menuItems = <React.Fragment>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/about">About</Link></li>
    </React.Fragment>


    const dashboardItem = <React.Fragment>
        {role?.role === 'buyer' && <li><Link to="/dashboard/myorder">My Orders</Link></li>}
        {role?.role === 'seller' && <li><Link to="/dashboard/myproducts">My Products</Link></li>}
        {role?.role === 'seller' && <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>}
        {role?.role === 'admin' && <li><Link to="/dashboard/allsellers">All Sellers</Link></li>}
        {role?.role === 'admin' && <li><Link to="/dashboard/allbuyers"> ALL Buyers</Link></li>}
        {role?.role === 'admin' && <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>}
    </React.Fragment>

    return (
        <div className="navbar py-5 bg-sky-900  text-white">
            <div className="navbar-start">
                <div className="dropdown  bg-sky-900">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5  bg-sky-900 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-sky-900 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl"><div><h1 className='text-bold text-zinc-300 text-3xl'>Mobile</h1><h1 className='text-xl pb-1 text-stone-300'>Resale</h1>
                </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown  dropdown-end">
                    <label tabIndex={0} className="px-3">Dashboard</label>
                    <ul tabIndex={0} className="menu dropdown-content bg-sky-900  w-52 mt-3">
                        {dashboardItem}
                    </ul>
                </div>

                <Link to="/login">
                    {
                        user ?
                            <li className="btn btn-secondary" onClick={handleLogOut}><Link to='/login'>Log out</Link></li>
                            :
                            <li className="btn btn-secondary"><Link to='/login'>Log in</Link></li>
                    }
                </Link>
            </div>
        </div>
    );
};

export default Navbar;