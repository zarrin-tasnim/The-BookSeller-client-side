import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";


import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import AvailableThriller from "../../Pages/Home/Category/AvailableThriller";


import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
// import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blogs from './../../Pages/Blogs/Blogs';
import Productdata from './../../Pages/Productdata/ProductData/Productdata';

import AvailableAdventure from "../../Pages/Home/Category/AdventureProduct/AvailableAdventure";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
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
                path: '/productsAll',
                element: <SignUp></SignUp>
            },
            {
                path: '/products/:id',
                element: <Productdata></Productdata>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params._id}`)
            },
            {
                path: '/products',
                element: <Productdata></Productdata>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params._id}`)
            
            },
            {
                path: '/thriller',
                element: <AvailableThriller></AvailableThriller>,
                loader: ({ params }) => fetch(`http://localhost:5000/thrillerBooks/${params._id}`)
            
            },
            {
                path: '/adventure',
                element: <AvailableAdventure></AvailableAdventure>,
                loader: ({ params }) => fetch(`http://localhost:5000/adventureBooks/${params._id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment></MyAppointment>
            }
        ]
    }
])

export default router;