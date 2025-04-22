import { useState, useEffect } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseChart from "./components/ExpenseChart";

function App() {
  // Step 1: Load data from localStorage
  const [allExpenses, setAllExpenses] = useState(() => {
    const savedData = localStorage.getItem("expenses");
    const parsedData = savedData ? JSON.parse(savedData) : [];

    // If the saved data is empty, use the hardcoded data
    if (parsedData.length === 0) {
      return [
        {
          id: "1",
          description: "2 packs of sugar",
          amount: "50",
          category: "Groceries",
        },
        {
          id: "2",
          description: "2 packs of Buiscuits",
          amount: "60",
          category: "Groceries",
        },
        {
          id: "3",
          description: "Electricity Bill",
          amount: "80",
          category: "Utilities",
        },
        {
          id: "4",
          description: "Spotify subscription",
          amount: "20",
          category: "Entertainment",
        },
        {
          id: "5",
          description: "2 Youtube subscription",
          amount: "5",
          category: "Entertainment",
        },
      ];
    }

    return parsedData;
  });

  // Step 2: Save to localStorage when `allExpenses` changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(allExpenses));
  }, [allExpenses]);

  const AddItem = (data) => {
    const newExpenses = [...allExpenses, data];
    setAllExpenses(newExpenses);
    setFilteredExpenses(newExpenses);
  };

  const [filteredExpenses, setFilteredExpenses] = useState(allExpenses);

  const deleteItem = (id) => {
    setAllExpenses(allExpenses.filter((expense) => expense.id !== id));
    setFilteredExpenses(
      filteredExpenses.filter((expense) => expense.id !== id)
    );
  };

  const filterItem = (category) => {
    if (!category) {
      setFilteredExpenses(allExpenses);
    } else {
      setFilteredExpenses(
        allExpenses.filter((expense) => expense.category === category)
      );
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <ExpenseForm addExpense={AddItem} />
          </div>

          <div className="col-md-6">
            <ExpenseChart data={filteredExpenses} />
          </div>
        </div>

        <ExpenseFilter filterItem={filterItem} />
        <ExpenseList items={filteredExpenses} deleteItem={deleteItem} />
      </div>
    </>
  );
}

export default App;
