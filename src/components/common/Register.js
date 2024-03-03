import React from "react";
import { Link } from "react-router-dom";
import registerArrow from "../../assets/images/down-right.png";
const Register = () => {
  return (
    <div className="flex items-center">
      <Link
        to="/login"
        className="register-button rounded-full py-2 px-3 poppins"
      >
        Log in
      </Link>
      <Link
        to="/register"
        className="register-button rounded-full py-2 px-3 poppins"
      >
        Register
      </Link>
      <Link to="/register" className="rounded-full bg-black">
        <img src={registerArrow} alt="register-arrow" />
      </Link>
    </div>
  );
};

export default Register;
