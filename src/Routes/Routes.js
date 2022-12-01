import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllBuyer from '../Dashboard/Admin/AllBuyer/AllBuyer';
import AllSeller from '../Dashboard/Admin/AllSeller/AllSeller';
import ReportedItems from '../Dashboard/Admin/ReportedItems/ReportedItems';
import MyOrder from '../Dashboard/Buyer/MyOrders/MyOrder';
import AddAProducts from '../Dashboard/Seller/AddAProduct/AddAProducts';
import MyProducts from '../Dashboard/Seller/MyProducts/MyProducts';
import DashboardLayout from '../layout/DashboardLayout';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home/Home';
import Mobiles from '../pages/Home/Home/Mobiles';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <Mobiles></Mobiles>,
                loader: ({ params }) => fetch(`http://localhost:5000/catmobiles/${params.id}`)

            }
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/dashboard/allsellers',
                element: <AllSeller></AllSeller>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/reporteditems',
                element: <ReportedItems></ReportedItems>
            },
            {
                path: '/dashboard/addaproduct',
                element: <AddAProducts></AddAProducts>
            },
            {
                path: '/dashboard/myorder',
                element: <MyOrder></MyOrder>
            },

        ]
    }


])


export default router;