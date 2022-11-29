import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";


import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";


import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";

import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
// import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blogs from './../../Pages/Blogs/Blogs';
import AvailabeProductdata from './../../Pages/Productdata/AvailabeProductdata/AvailabeProductdata';
import AdminRoute from './../AdminRoute/AdminRoute';
import AllUsers from './../../Pages/Dashboard/AllUsers/AllUsers';
import AddDoctor from './../../Pages/Dashboard/AddDoctor/AddDoctor';
import ManageDoctors from './../../Pages/Dashboard/ManageDoctors/ManageDoctors';
import Payment from './../../Pages/Dashboard/Payment/Payment';




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                loader: () => fetch(`https://b612-used-products-resale-server-side-zarrin-tasnim.vercel.app/categories`),
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
                path: '/categories/:id',
                element: <PrivateRoute><AvailabeProductdata></AvailabeProductdata></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-zarrin-tasnim.vercel.app/categories/${params.id}`)
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
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/adddoctor',
                element: <AdminRoute> <AddDoctor></AddDoctor></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute> <ManageDoctors></ManageDoctors></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://b612-used-products-resale-server-side-zarrin-tasnim.vercel.app/bookings/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <DisplayError></DisplayError>
    }
])

export default router;