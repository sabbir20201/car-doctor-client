import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayOut from '../MainLayOut/MainLayOut';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
        
    }
])

export default Routes;