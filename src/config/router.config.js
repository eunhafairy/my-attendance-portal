import { createBrowserRouter } from "react-router-dom";
import { Register } from "../features/register/Register";
import {Login} from "../features/login/Login" 
import { Home } from "../features/home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);