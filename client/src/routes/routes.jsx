import Completed from "../pages/completed/Completed";
import Food from "../pages/food/Food";
import Home from "../pages/home/Home";
import Order from "../pages/order/Order";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
export const routes = createBrowserRouter([
    {
        path: '/',
        element: <MasterLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/food',
                element: <Food />,
            },
            {
                path: '/order',
                element: <Order />,
            },
            {
                path: '/completed',
                element: <Completed />,
            },
        ]

    }
])

