import React, { useEffect, useState } from "react";

const PurchasesTable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("purchaseData")) || {};
    const tableData = Array.isArray(storedData) ? storedData : [storedData];

    setTableData(tableData);
  }, []);

  return (
    <div className="p-12">
      <table className="border w-full">
        <thead>
          <tr className="flex justify-between mx-2">
            <th>Expense Name</th>
            <th>Expense Price</th>
            <th>Effort</th>
          </tr>
        </thead>
        <tbody className="flex flex-col">
          {tableData.map((item, index) => (
            <tr key={index} className="border flex justify-between">
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
