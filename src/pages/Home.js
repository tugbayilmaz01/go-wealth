import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import landingPageImage from "../assets/images/save-money.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col-reverse md:flex-row gap-x-24">
        <div className="md:w-1/2">
          <div className="poppins text-4xl md:pt-40 md:pl-16">
            Manage your money with <span className="font-medium">GoWealth</span>
            .
          </div>

          <div className="poppins text-4xl md:pl-16 mt-4">
            Advance your savings.
          </div>
          <div className="poppins md:pl-16 mt-6 md:w-full font-normal">
            Find out how much effort you spend on the things you want to buy,
            <span className="text-gray-600"> and spend more sensibly.</span>
          </div>
          <Link to="/calculation">
            <button className="started-button p-4 md:ml-16 mt-6 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
        <img
          src={landingPageImage}
          alt="home-page-pic"
          className="flex-shrink-0 h-2/3 mt-12"
        />
      </div>
    </>
  );
};

export default Home;
