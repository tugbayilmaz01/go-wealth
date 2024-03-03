import React from "react";
import Header from "../../components/common/Header";

const SignUp = () => {
  return (
    <>
      <Header currentPage="register" />
      <div className="flex flex-col items-center h-full mt-16">
        <h2 className="poppins text-2xl mb-6 dark-blue font-medium tracking-wide">
          Sign up and manage your money with
          <span className="font-bold"> GoWealth.</span>{" "}
        </h2>
        <div className="flex flex-col gap-y-4 items-center border-black register-bg rounded-xl p-10 relative z-10 w-1/4">
          <input
            id="name"
            placeholder="Name"
            className="p-2 border border-black rounded-md input-bg w-full"
          />
          <input
            id="surname"
            placeholder="Surname"
            name="surname"
            className="p-2 border border-black rounded-md input-bg w-full"
          />

          <input
            id="email"
            placeholder="Email"
            className="p-2 border border-black rounded-md input-bg w-full"
          />
          <input
            id="password"
            placeholder="Password"
            type="password"
            className="p-2 border border-black rounded-md input-bg w-full"
          />
          <button className="mt-2 p-2 bg-color poppins rounded-xl font-bold w-full">
            Register
          </button>
        </div>
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
