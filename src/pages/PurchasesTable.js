import React, { useEffect, useState } from "react";

const PurchasesTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("purchaseData")) || {};
    const tableData = Array.isArray(storedData) ? storedData : [storedData];

    setTableData(tableData);
  }, []);

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between gap-x-2">
        <p className="poppins p-1 font-semibold">
          Check out your lately expenses!
        </p>
        <div className="flex items-end gap-x-2 mb-2">
          <input
            placeholder="Search..."
            className="px-1.5 py-1 table-search poppins"
          ></input>
          <button className="search-button poppins p-1 px-2">Find</button>
        </div>
      </div>

      <table className="border w-full shadow-md">
        <thead>
          <tr className="flex justify-between p-2 poppins border text-white bg-gray-900 rounded-md">
            <th className="font-normal">Expense Name</th>
            <th className="font-normal">Expense Price</th>
            <th className="font-normal">Effort</th>
          </tr>
        </thead>
        <tbody className="flex flex-col ">
          {tableData.map((item, index) => (
            <tr
              key={index}
              className="flex justify-between poppins mx-2 border-b border-inherit"
            >
              <td className="p-1">{item.expenseName}</td>
              <td className="p-1">{item.expenditure}</td>
              <td className="p-1">{item.effortResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchasesTable;
