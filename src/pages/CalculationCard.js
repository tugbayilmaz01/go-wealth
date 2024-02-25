import React, { useState } from "react";
import coinPhoto from "../../src/assets/images/coin.png";
import { calculateEffort } from "../utils/calculateLabor";

const CalculationCard = () => {
  const [monthlyWorkingHours, setMonthlyWorkingHours] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [expenseName, setExpenseName] = useState("");

  const [effortResult, setEffortResult] = useState(null);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isCalculated, setIsCalculated] = useState(false);

  const handleCalculateEffort = () => {
    if (!monthlyWorkingHours || !monthlyIncome || !itemPrice) {
      setShowErrorMessage(true);
      setEffortResult(null);
      setIsCalculated(false);
      return;
    }
    const result = calculateEffort(
      parseFloat(monthlyWorkingHours),
      parseFloat(monthlyIncome),
      parseFloat(itemPrice)
    );
    setShowErrorMessage(false);
    setEffortResult(result);
    setIsCalculated(true);
  };

  const handleBuy = () => {
    if (itemPrice && effortResult !== null) {
      const purchaseData = {
        expenseName,
        expenditure: parseFloat(itemPrice),
        effortResult: parseFloat(effortResult.toFixed(2)),
      };

      const existingData =
        JSON.parse(localStorage.getItem("purchaseData")) || [];
      const updatedData = Array.isArray(existingData) ? existingData : [];

      updatedData.push(purchaseData);

      localStorage.setItem("purchaseData", JSON.stringify(updatedData));
    } else {
      console.error("Cannot save purchase data. Some data is missing.");
    }
  };
  return (
    <>
      <div className="h-screen background-color flex flex-col pt-8 items-center">
        <img src={coinPhoto} alt="home-page-pic" className="h-1/5 pr-34" />
        <div className="poppins text-2xl pt-4">
          Calculate how long it has worked for the product you will purchase.
        </div>
        <div className="poppins text-sm mt-2">
          It's time to find out if what you're going to buy is really worth your
          effort!
        </div>

        <div className="flex flex-row max-sm:flex-col gap-y-4 mt-2">
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

          <div className="flex flex-col mb-4">
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
        <div className="flex flex-row max-sm:flex-col gap-y-4">
          <div className="flex flex-col mr-8">
            <label
              className="poppins text-sm font-semibold"
              htmlFor="expenseName"
            >
              What will you spend?
            </label>
            <input
              id="expenseName"
              value={expenseName}
              name="expenseName"
              onChange={(e) => setExpenseName(e.target.value)}
              className="p-1 border border-black rounded-md mt-1 calculate-input"
            />
          </div>
          <div className="flex flex-col">
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
        </div>
        <button
          onClick={handleCalculateEffort}
          className="started-button p-2 mt-6 rounded-full md:w-1/5"
        >
          Calculate
        </button>
        {isCalculated && (
          <div className="flex flex-row gap-x-6">
            <button
              onClick={handleBuy}
              className="p-2 mt-6 rounded-full buy-button w-20"
            >
              Buy
            </button>
            <button className="p-2 mt-6 rounded-full giveup-button w-20">
              Give Up
            </button>
          </div>
        )}

        {showErrorMessage && (
          <p className="poppins pt-6 text-lg" style={{ color: "red" }}>
            Fill in the missing input fields to make a calculation.
          </p>
        )}
        {effortResult !== null && !showErrorMessage && (
          <p className="poppins pt-8 text-lg">
            You have spent{" "}
            <span style={{ fontWeight: "bold", color: "green" }}>
              {effortResult.toFixed(2)} hours
            </span>{" "}
            of effort in a month for this {expenseName}.
          </p>
        )}
      </div>
    </>
  );
};

export default CalculationCard;
