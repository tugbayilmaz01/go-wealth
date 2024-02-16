import React from "react";
import coinPhoto from "../../src/assets/images/coin.png";

const CalculationCard = () => {
  return (
    <>
      <div className="h-screen background-color flex flex-col pt-20 items-center">
        <img src={coinPhoto} alt="home-page-pic" className="h-1/5 pr-34" />
        <div className="poppins text-2xl pt-4">
          Calculate how long it has worked for the product you will purchase.
        </div>
        <div className="poppins text-sm mt-4">
          It's time to find out if what you're going to buy is really worth your
          effort!
        </div>

        <div className="flex flex-row mt-6">
          <div className="flex flex-col mr-8">
            <label
              className="poppins text-sm font-semibold"
              htmlFor="monthlyHours"
            >
              How many hours do you work per month?
            </label>
            <input
              type="number"
              id="monthlyHours"
              name="monthlyHours"
              className="p-1 border border-black rounded-md mt-1 background-color"
            />
          </div>

          <div className="flex flex-col">
            <label
              className="poppins text-sm font-semibold"
              htmlFor="monthlyEarnings"
            >
              How much is your monthly income?
            </label>
            <input
              type="number"
              id="monthlyEarnings"
              name="monthlyEarnings"
              className="p-1 border border-black rounded-md mt-1 background-color"
            />
          </div>
        </div>

        <div className="flex flex-col mt-6">
          <label
            className="poppins text-sm font-semibold"
            htmlFor="expenditure"
          >
            How much will you spend?
          </label>
          <input
            type="number"
            id="expenditure"
            name="expenditure"
            className="p-1 border border-black rounded-md mt-1 background-color"
          />
        </div>
        <button className="started-button p-4 ml-16 mt-6 rounded-full w-1/4">
          Calculate
        </button>
      </div>
    </>
  );
};

export default CalculationCard;
