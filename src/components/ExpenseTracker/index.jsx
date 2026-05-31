import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import ExpenseForm from "../ExpenseForm";
import ExpenseSummary from "../ExpenseSummary";
import ExpenseFilters from "../ExpenseFilters";
import ExpenseItem from "../ExpenseItem";
import "./index.css";

const initialExpensesList = [
  {
    id: uuidv4(),
    title: "Monthly groceries",
    amount: 2450,
    category: "Food",
    type: "Expense",
    date: "2026-05-01",
  },
  {
    id: uuidv4(),
    title: "Freelance project",
    amount: 15000,
    category: "Work",
    type: "Income",
    date: "2026-05-05",
  },
  {
    id: uuidv4(),
    title: "Bus pass",
    amount: 850,
    category: "Travel",
    type: "Expense",
    date: "2026-05-10",
  },
];

const getStoredExpenses = () => {
  const storedExpenses = JSON.parse(localStorage.getItem("expensesList"));
  return storedExpenses !== null ? storedExpenses : initialExpensesList;
};

const ExpenseTracker = () => {
  const [expensesList, setExpensesList] = useState(getStoredExpenses());
  const [searchInput, setSearchInput] = useState("");
  const [activeType, setActiveType] = useState("All");

  useEffect(() => {
    localStorage.setItem("expensesList", JSON.stringify(expensesList));
  }, [expensesList]);

  const addExpense = (expenseDetails) => {
    const newExpense = {
      id: uuidv4(),
      ...expenseDetails,
      amount: Number(expenseDetails.amount),
    };

    setExpensesList((prevExpensesList) => [newExpense, ...prevExpensesList]);
  };

  const deleteExpense = (id) => {
    const filteredExpenses = expensesList.filter(
      (eachExpense) => eachExpense.id !== id,
    );
    setExpensesList(filteredExpenses);
  };

  const clearAllExpenses = () => {
    setExpensesList([]);
  };

  const onChangeSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const updateActiveType = (type) => {
    setActiveType(type);
  };

  const searchedExpenses = expensesList.filter((eachExpense) =>
    eachExpense.title.toLowerCase().includes(searchInput.toLowerCase()),
  );

  const filteredExpenses = searchedExpenses.filter((eachExpense) => {
    if (activeType === "All") {
      return true;
    }
    return eachExpense.type === activeType;
  });

  const renderExpensesList = () => {
    if (filteredExpenses.length === 0) {
      return (
        <div className="empty-view-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
            alt="no expenses"
            className="empty-view-image"
          />
          <h1 className="empty-view-heading">No Transactions Found</h1>
          <p className="empty-view-description">
            Your current filter has no matching records.
          </p>
        </div>
      );
    }

    return (
      <ul className="expenses-list">
        {filteredExpenses.map((eachExpense) => (
          <ExpenseItem
            key={eachExpense.id}
            expenseDetails={eachExpense}
            deleteExpense={deleteExpense}
          />
        ))}
      </ul>
    );
  };

  return (
    <div className="expense-tracker-bg-container">
      <Header />
      <main className="expense-tracker-container">
        <ExpenseSummary expensesList={expensesList} />
        <div className="expense-content-container">
          <ExpenseForm addExpense={addExpense} />
          <section className="transactions-section">
            <ExpenseFilters
              searchInput={searchInput}
              onChangeSearchInput={onChangeSearchInput}
              activeType={activeType}
              updateActiveType={updateActiveType}
              clearAllExpenses={clearAllExpenses}
              hasExpenses={expensesList.length > 0}
            />
            {renderExpensesList()}
          </section>
        </div>
      </main>
    </div>
  );
};

export default ExpenseTracker;
