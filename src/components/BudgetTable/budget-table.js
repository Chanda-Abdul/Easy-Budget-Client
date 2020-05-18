import React from "react";
import "./budget-table.css";

export default function BudgetTable(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {/* Row 1 - Table Header*/}
            <th scope="col">Date</th>
            <th scope="col">Expense</th>
            <th scope="col">Amount</th>
            <th scope="col">Type</th>
            <th scope="col">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* Row 2 */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            {/* Row 3 */}
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        {/* Table footer */}
        <tfoot>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
