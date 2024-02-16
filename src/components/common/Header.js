import React from "react";
import { Link } from "react-router-dom";
import coinIcon from "../../assets/images/coin.png";

const Header = () => {
  return (
    <header className="background-color flex items-center p-4">
      <div className="font-extrabold poppins pl-8 pr-12">GoWealth.</div>
      <div className="flex gap-x-8 poppins text-sm">
        <Link to="/">Business</Link>
        <Link to="/">Pricing</Link>
        <Link to="/">Services</Link>
      </div>
    </header>
  );
};

export default Header;
