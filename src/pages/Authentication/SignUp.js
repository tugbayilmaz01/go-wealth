import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../../components/common/Header";
import { userSchema } from "../../helpers/validations/UserValidation";

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
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
    const isValid = await userSchema.isValid(formValues);
    if (isValid) {
      try {
        await axios.post("http://localhost:5000/users/register", formValues);
        navigate("/login");
      } catch (err) {
        console.log(err);
        setError(true);
      }
    }
  };
  return (
    <>
      <Header currentPage="register" />
      <div className="flex flex-col items-center h-full mt-16">
        <h2 className="poppins text-2xl mb-6 dark-blue font-medium tracking-wide">
          Sign up and manage your money with
          <span className="font-bold"> GoWealth.</span>{" "}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-y-4 items-center border-black register-bg rounded-xl p-10 relative z-10 lg:w-1/4 "
        >
          <input
            className="p-2 border border-black rounded-md input-bg w-full"
            id="name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            name="name"
            placeholder="Name"
            required
          />
          <input
            className="p-2 border border-black rounded-md input-bg w-full"
            id="surname"
            type="text"
            value={formValues.surname}
            onChange={handleChange}
            name="surname"
            placeholder="Surname"
            required
          />

          <input
            className="p-2 border border-black rounded-md input-bg w-full"
            id="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            required
          />
          <input
            className="p-2 border border-black rounded-md input-bg w-full"
            id="password"
            placeholder="Password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            type="password"
            required
          />
          <button
            onClick={handleSubmit}
            className="mt-2 p-2 bg-color poppins rounded-xl font-bold w-full"
          >
            Sign Up
          </button>
          {error && "Something went wrong!"}
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

export default SignUp;
