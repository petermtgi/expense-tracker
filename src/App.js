import { useState } from "react";
import "./App.css";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseTable from "./Components/ExpenseTable";
import SearchBar from "./Components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSearchChange = (term) => {
    setSearch(term.toLowerCase());
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.description.toLowerCase().includes(search)
  );

  return (
    <div className="App" style={{ padding: "2rem" }}>
      <h1>Expense Tracker </h1>
      <SearchBar search={search} onSearchChange={handleSearchChange} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
