import React, { useState } from "react";
import coinPhoto from "../../src/assets/images/coin.png";
import { calculateEffort } from "../utils/calculateLabor";

const CalculationCard = () => {
  const [monthlyWorkingHours, setMonthlyWorkingHours] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [itemPrice, setItemPrice] = useState("");

  const [effortResult, setEffortResult] = useState(null);

  const handleCalculateEffort = () => {
    const result = calculateEffort(
      parseFloat(monthlyWorkingHours),
      parseFloat(monthlyIncome),
      parseFloat(itemPrice)
    );
    setEffortResult(result);
  };
  return (
    <>
      <div className="h-screen background-color flex flex-col pt-10 items-center">
        <img src={coinPhoto} alt="home-page-pic" className="h-1/5 pr-34" />
        <div className="poppins text-2xl pt-4">
          Calculate how long it has worked for the product you will purchase.
        </div>
        <div className="poppins text-sm mt-2">
          It's time to find out if what you're going to buy is really worth your
          effort!
        </div>

        <div className="flex flex-row mt-10">
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
              value={monthlyWorkingHours}
              onChange={(e) => setMonthlyWorkingHours(e.target.value)}
              className="p-1 border border-black rounded-md mt-1 calculate-input"
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
              value={monthlyIncome}
              name="monthlyEarnings"
              onChange={(e) => setMonthlyIncome(e.target.value)}
              className="p-1 border border-black rounded-md mt-1 calculate-input"
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
            value={itemPrice}
            name="expenditure"
            onChange={(e) => setItemPrice(e.target.value)}
            className="p-1 border border-black rounded-md mt-1 calculate-input"
          />
        </div>
        <button
          onClick={handleCalculateEffort}
          className="started-button p-4 mt-6 rounded-full w-1/4"
        >
          Calculate
        </button>
        {effortResult !== null && (
          <p className="poppins pt-6 text-lg">
            <>
              You have spent{" "}
              <span style={{ fontWeight: "bold", color: "green" }}>
                {effortResult.toFixed(1)} hours
              </span>{" "}
              of effort in a month for this expense.
            </>
          </p>
        )}
      </div>
    </>
  );
};

export default CalculationCard;
