import React, { useEffect, useState } from "react";

const PurchasesTable = () => {
  const [tableData, setTableData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("purchaseData")) || {};
    const tableData = Array.isArray(storedData) ? storedData : [storedData];

    setTableData(tableData);
  }, []);

  const handleSearch = () => {
    if (searchInput.trim() === "") {
      const storedData = JSON.parse(localStorage.getItem("purchaseData")) || {};
      const originalData = Array.isArray(storedData)
        ? storedData
        : [storedData];
      setTableData(originalData);
    } else {
      const filteredData = tableData.filter(
        (item) =>
          item.expenseName.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.expenditure.toString().includes(searchInput)
      );
      setTableData(filteredData);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-5">
      <div className="flex flex-row justify-between gap-x-2">
        <p className="poppins p-1 font-semibold text-lg tracking-wider	">
          Lately Expenses
        </p>
        <div className="flex items-end gap-x-2 mb-2">
          <input
            placeholder="Search..."
            className="px-1.5 py-1 table-search poppins max-sm:w-1/2"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="search-button poppins p-1 px-2"
            onClick={handleSearch}
          >
            Find
          </button>
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
