import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Register from "./Register";

const Header = ({ currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <header className="background-color flex justify-between items-center p-4">
      <div className="p-2 md:hidden " ref={menuRef}>
        <button
          onClick={handleMenuToggle}
          className="text-black font-bold text-lg"
        >
          ☰
        </button>
        {menuOpen && (
          <div className="md:hidden bg-color absolute left-0 top-0 flex flex-col border border-black rounded-sm h-full p-2 gap-y-2">
            <Link to="/" className="font-extrabold flex poppins pl-8 pr-4">
              GoWealth.
            </Link>
            <Link to="/calculation">Calculation</Link>
            <Link to="/purchases">Expenses</Link>
          </div>
        )}
      </div>
      <div className="flex">
        <Link
          to="/"
          className="font-extrabold max-md:hidden poppins pl-8 pr-12"
        >
          GoWealth.
        </Link>
        <div className="header-title hidden md:flex gap-x-8 poppins text-sm">
          <Link to="/calculation">Calculation</Link>
          <Link to="/purchases">Expenses</Link>
        </div>
      </div>
      <div className="hidden md:flex p-2">
        {currentPage !== "login" && currentPage !== "register" && <Register />}
      </div>
    </header>
  );
};

export default Header;
