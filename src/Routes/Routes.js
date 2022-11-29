import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AllBuyer from '../Dashboard/Admin/AllBuyer/AllBuyer';
import AllSeller from '../Dashboard/Admin/AllSeller/AllSeller';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home/Home';
import Mobiles from '../pages/Home/Home/Mobiles';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';


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
                path: '/allbuyers',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/allsellers',
                element: <AllSeller></AllSeller>
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
    }
])


export default router;