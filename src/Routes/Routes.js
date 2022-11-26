import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
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
                path: '/mobiles/:id',
                element: <Mobiles></Mobiles>,
                loader: ({ params }) => fetch(`http://localhost:5000/catmobiles/${params.id}`)

            }
        ]
    }
])


export default router;