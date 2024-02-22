import React, { useEffect, useState } from "react";

const PurchasesTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("purchaseData")) || {};
    const tableData = Array.isArray(storedData) ? storedData : [storedData];

    setTableData(tableData);
  }, []);

  return (
    <div className="p-8">
      <table className="border w-full shadow-md">
        <thead>
          <tr className="flex justify-between p-1 poppins border text-white bg-gray-900">
            <th className="font-normal">Expense Name</th>
            <th className="font-normal">Expense Price</th>
            <th className="font-normal">Effort</th>
          </tr>
        </thead>
        <tbody className="flex flex-col ">
          {tableData.map((item, index) => (
            <tr key={index} className="flex justify-between poppins mx-2">
              <td>{item.expenseName}</td>
              <td>{item.expenditure}</td>
              <td>{item.effortResult}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchasesTable;
