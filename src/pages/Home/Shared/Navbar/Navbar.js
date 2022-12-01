import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

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
        <li><Link to="/dashboard/myorders">My Orders</Link></li>
        <li><Link to="/dashboard/myproducts">My Products</Link></li>
        <li><Link to="/dashboard/addaproduct">Add A Product</Link></li>
        <li><Link to="/dashboard/allsellers">All Sellers</Link></li>
        <li><Link to="/dashboard/allbuyers">ALL Buyers</Link></li>
        <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
    </React.Fragment>

    return (
        <div className="navbar py-5 bg-sky-900  text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Mobile Resale</Link>
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