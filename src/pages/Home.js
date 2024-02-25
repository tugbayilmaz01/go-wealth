import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import landingPageImage from "../assets/images/save-money.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col-reverse md:flex-row gap-x-24 items-center justify-items-center">
        <div className="md:w-1/2">
          <div className="poppins text-4xl md:pt-40 md:pl-16 max-md:pl-4">
            Manage your money with <span className="font-medium">GoWealth</span>
            .
          </div>

          <div className="poppins text-4xl md:pl-16 mt-4 max-md:px-4">
            Advance your savings.
          </div>
          <div className="poppins md:pl-16 mt-6 md:w-full font-normal max-md:px-4">
            Find out how much effort you spend on the things you want to buy,
            <span className="text-gray-600"> and spend more sensibly.</span>
          </div>
          <Link to="/calculation">
            <button className="started-button p-4 md:ml-16 mt-6 max-md:m-4 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
        <img
          src={landingPageImage}
          alt="home-page-pic"
          className="flex-shrink-0 h-1/5 max-md:p-6"
        />
      </div>
    </>
  );
};

export default Home;
