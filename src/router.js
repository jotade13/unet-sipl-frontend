import { createBrowserRouter } from "react-router";
import {
  route,
  layout,
} from "@react-router/dev/routes";
import { Root } from "./Root";
import Dashboard from "./containers/dashboard";
import Login from "./containers/login";
import Register from "./containers/register"


export const router = createBrowserRouter([
    { 
        path: "/", 
        Component: Root,
        children: [
            {
                path: "/auth", 
                Component: AuthLayout, 
                children: [
                    { 
                      path: "/login", 
                      Component: Login
                    },
                    {
                      path: "/register", 
                      Component: Register
                    },
                ]
            },
        ]
    },

]);