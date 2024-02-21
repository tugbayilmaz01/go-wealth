import React from "react";

const PurchasesTable = () => {
  return (
    <div>
      Purchases
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Labor</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
};

export default PurchasesTable;
