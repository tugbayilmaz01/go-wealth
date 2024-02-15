import React from "react";
import { RouterProvider } from "react-router-dom";
import "./assets/styles/App.css";
import router from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
