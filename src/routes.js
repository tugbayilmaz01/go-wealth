import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Calculation from "./pages/LaborCalculation/Calculation";
import Purchases from "./pages/Purchase/Purchases";
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calculation",
    element: <Calculation />,
  },
  {
    path: "/purchases",
    element: <Purchases />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <SignUp />,
  },
]);

export default router;
