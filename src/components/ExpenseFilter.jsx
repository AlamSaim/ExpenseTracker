import React from "react";

const ExpenseFilter = ({ filterItem }) => {
  return (
    <select
      className="form-select mb-3"
      onChange={(e) => filterItem(e.target.value)}
    >
      <option value="">All Categories</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option>
      <option value="Groceries">Groceries</option>
    </select>
  );
};

export default ExpenseFilter;
