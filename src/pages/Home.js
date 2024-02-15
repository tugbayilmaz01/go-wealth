import React from "react";
import Header from "../components/common/Header";
import landingPageImage from "../assets/images/save-money.png";

const Home = () => {
  return (
    <>
      <Header />
      <div className="background-color h-full flex">
        <div className="flex-1">
          <div className="poppins text-4xl pt-32 pl-10">
            Manage your money with <span className="font-medium">GoWealth</span>
            .
          </div>

          <div className="poppins text-4xl pl-10 mt-2">
            Advance your savings.
          </div>
          <div className="poppins pl-10 mt-6 w-1/3 font-normal">
            Find out how much effort you spend on the things you want to buy,
            and spend more sensibly.
          </div>
          <button className="started-button pl-10">Get Started</button>
        </div>
        <img src={landingPageImage} alt="Card" className="w-1/3 mt-16 pr-24" />
      </div>
    </>
  );
};

export default Home;
