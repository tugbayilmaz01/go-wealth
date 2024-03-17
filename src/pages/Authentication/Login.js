import React, { useState } from "react";
import axios from "axios";
import Header from "../../components/common/Header";
import googleIcon from "../../assets/images/google.png";
import githubIcon from "../../assets/images/github.png";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/users/login", formValues);
      navigate("/calculation");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <Header currentPage="login" />
      <div className="flex flex-col items-center h-full mt-16">
        <h2 className="poppins text-2xl mb-5 dark-blue font-medium tracking-wide">
          Welcome back to
          <span className="font-bold"> GoWealth.</span>{" "}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 items-center border-black register-bg rounded-xl p-10 relative z-10 w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <input
            id="email"
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="p-2 border border-black rounded-md input-bg w-full"
          />
          <input
            id="password"
            value={formValues.password}
            name="password"
            onChange={handleChange}
            placeholder="Password"
            type="password"
            required
            className="p-2 border border-black rounded-md input-bg w-full"
          />
          <button className="mt-2 p-2 bg-color poppins rounded-xl font-bold w-full">
            Login
          </button>
          <h2 className="poppins font-bold text-color text-center">Or</h2>
          <div className="flex flex-row w-full gap-x-4">
            <button className="mt-2 p-2 text-center bg-color poppins rounded-xl font-bold w-full flex items-center justify-center">
              <img src={googleIcon} alt="google-icon" className="w-1/6" />
            </button>
            <button className="mt-2 p-2 bg-color poppins rounded-xl font-bold w-full flex items-center justify-center">
              <img src={githubIcon} alt="github-icon" className="w-1/6" />
            </button>
          </div>
          <h2 className="text-color poppins font-bold">
            Dont Have An Accont? <Link to="/register">Sign Up</Link>{" "}
          </h2>
        </form>
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-black"
          style={{
            borderRadius: "50% 50% 0 0",
            clipPath: "ellipse(60% 60% at 50% 95%)",
          }}
        ></div>
      </div>
    </>
  );
};

export default Login;
