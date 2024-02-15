import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
