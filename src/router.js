import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import Dashboard from "./containers/dashboard";
import Login from "./containers/login";
import Register from "./containers/register"
import { AuthLayout } from "./containers/AuthLayout";


export const router = createBrowserRouter([
    { 
        path: "/auth", 
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
        ]
    },

]);