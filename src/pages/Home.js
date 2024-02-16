import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import landingPageImage from "../assets/images/save-money.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="h-screen background-color flex">
        <div className="flex-1">
          <div className="poppins text-4xl pt-40 pl-16">
            Manage your money with <span className="font-medium">GoWealth</span>
            .
          </div>

          <div className="poppins text-4xl pl-16 mt-4">
            Advance your savings.
          </div>
          <div className="poppins pl-16 mt-6 w-1/2 font-normal">
            Find out how much effort you spend on the things you want to buy,
            <span className="text-gray-600"> and spend more sensibly.</span>
          </div>
          <Link to="/calculation">
            <button className="started-button p-4 ml-16 mt-6 rounded-full">
              Get Started
            </button>
          </Link>
        </div>
        <img
          src={landingPageImage}
          alt="home-page-pic"
          className="h-2/3 mt-14 pr-32"
        />
      </div>
    </>
  );
};

export default Home;
