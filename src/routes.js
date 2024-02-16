import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Calculation from "./pages/Calculation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/calculation",
    element: <Calculation />,
  },

  // TODO :: use layout if needed or remove this lines.
  //   {
  //     path: '/',
  //     element: <RootLayout />,
  //     children: [
  //       {
  //         path: 'tasks',
  //         element: <Task/>
  //       },
  //       {
  //         path: 'timer',
  //         element: <Timer />
  //       }
  //     ]
  //   },
]);

export default router;
