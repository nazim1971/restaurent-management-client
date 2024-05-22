import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import OrderFood from "../OrderFood/OrderFood";
import Login from "../LoginReg/Login";
import Register from "../LoginReg/Register";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../Home/EditProfile";
import Dashboard from "../Dashboard/Dashboard";
import Cart from "../Dashboard/Cart";
import Reservation from "../Dashboard/Reservation";
import UserHome from "../Dashboard/UserHome";
import Review from "../Dashboard/Review";
import MyBookins from "../Dashboard/MyBookins";

export  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/> ,
      children: [
        {
            path: '/',
            element: <Home/>
        },
        {
          path: '/menu',
          element: <PrivateRoute><Menu/></PrivateRoute>
        },
        {
          path: '/orderFood/:category',
          element: <OrderFood/>
        },
        {
          path: '/orderFood',
          element: <OrderFood/>
        },
        {
          path: '/editProfile',
          element: <PrivateRoute> <EditProfile/> </PrivateRoute>
        }
      ]
    },
  {
      path: '/login',
      element: <Login/>
    }  ,
  {
      path: '/register',
      element: <Register/>
    } ,
    {
      path: 'dashboard',
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart/>
        },
        {
          path: 'reservation',
          element: <Reservation/>
        },
        {
          path: 'userHome',
          element: <UserHome/>
        },
        {
          path: 'review',
          element: <Review/>
        },
        {
          path: 'bookings',
          element: <MyBookins/>
        }
      ]
    } 
  ]);