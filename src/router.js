import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import Dashboard from "./containers/dashboard";
import Login from "./containers/login";
import Register from "./containers/register"
import { AuthLayout } from "./containers/AuthLayout";
import { DefaultLayout } from "./containers/DefaultLayout";
import { Equipments } from "./containers/Equipments";


export const router = createBrowserRouter([
    { 
        path: "/", 
        Component: AuthLayout, 
        children: [
            { 
                path: "login", 
                Component: Login
            },
            {
                path: "register", 
                Component: Register
            },
        ],
    },
    {
        path:"/",
        Component: DefaultLayout,
        children: [
            {
                path: "dashboard",
                Component: Dashboard
            },
            {
                path: "equipment:id",
                Component: Equipments
            }
        ]
    }
]);