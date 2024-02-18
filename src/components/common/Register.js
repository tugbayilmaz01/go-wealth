import React from "react";
import registerArrow from "../../assets/images/down-right.png";
const Register = () => {
  return (
    <div className="flex items-center">
      <button className="register-button rounded-full py-2 px-4">
        Register
      </button>
      <button className="rounded-full bg-black">
        <img src={registerArrow} alt="register-arrow" />
      </button>
    </div>
  );
};

export default Register;
