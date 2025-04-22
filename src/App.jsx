import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [allExpenses, setAllExpenses] = useState([
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
  ]);

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
      <ExpenseForm addExpense={AddItem} />
      <ExpenseFilter filterItem={filterItem} />
      <ExpenseList items={filteredExpenses} deleteItem={deleteItem} />
    </>
  );
}

export default App;
