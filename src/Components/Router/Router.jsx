import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Menu from "../Menu/Menu";
import OrderFood from "../OrderFood/OrderFood";

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
          element: <Menu/>
        },
        {
          path: '/orderFood/:category',
          element: <OrderFood/>
        }
      ]
    },
  ]);