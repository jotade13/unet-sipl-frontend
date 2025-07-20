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
  { path: "/", Component: Login },
  { path: "/register", Component: Register },
  { path: "/dashboard", Component: Dashboard },
  layout("./auth/layout.tsx", [
    route("login", "./auth/login.tsx"),
    route("register", "./auth/register.tsx"),
  ]),
]);