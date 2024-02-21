import React from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Header = () => {
  return (
    <header className="background-color flex justify-between items-center p-1">
      <div className="flex">
        <div className="font-extrabold poppins pl-8 pr-12">GoWealth.</div>
        <div className="header-title flex gap-x-8 poppins text-sm">
          <Link to="/">Business</Link>
          <Link to="/">Pricing</Link>
          <Link to="/purchases">Services</Link>
        </div>
      </div>
      <div className="p-2">
        <Register />
      </div>
    </header>
  );
};

export default Header;
