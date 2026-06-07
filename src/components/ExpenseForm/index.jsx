import { useState } from "react";
import "./index.css";

const categoryOptions = [
  "Food",
  "Travel",
  "Bills",
  "Shopping",
  "Health",
  "Work",
  "Other",
];

const ExpenseForm = (props) => {
  const { addExpense } = props;
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categoryOptions[0]);
  const [type, setType] = useState("Expense");
  const [date, setDate] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onChangeTitle = (event) => setTitle(event.target.value);

  const onChangeAmount = (event) => setAmount(event.target.value);

  const onChangeCategory = (event) => setCategory(event.target.value);

  const onChangeType = (event) => setType(event.target.value);

  const onChangeDate = (event) => setDate(event.target.value);

  const onSubmitExpense = (event) => {
    event.preventDefault();

    if (title.trim() === "" || amount === "" || date === "") {
      setErrorMsg("Enter All Fields");
      return;
    }

    if (Number(amount) <= 0) {
      setErrorMsg("Amount should be greater than zero");
      return;
    }

    addExpense({ title, amount, category, type, date });
    setTitle("");
    setAmount("");
    setCategory(categoryOptions[0]);
    setType("Expense");
    setDate("");
    setErrorMsg("");
  };

  return (
    <form className="expense-form-container" onSubmit={onSubmitExpense}>
      <h1 className="form-heading">Add Transaction</h1>
      <label className="input-label" htmlFor="title">
        Title
      </label>
      <input
        id="title"
        type="text"
        className="input-field"
        placeholder="Ex: Dinner"
        value={title}
        onChange={onChangeTitle}
      />
      <label className="input-label" htmlFor="amount">
        Amount
      </label>
      <input
        id="amount"
        type="number"
        className="input-field"
        placeholder="Ex: 500"
        value={amount}
        onChange={onChangeAmount}
      />
      <label className="input-label" htmlFor="category">
        Category
      </label>
      <select
        id="category"
        className="input-field"
        value={category}
        onChange={onChangeCategory}
      >
        {categoryOptions.map((eachCategory) => (
          <option key={eachCategory} value={eachCategory}>
            {eachCategory}
          </option>
        ))}
      </select>
      <label className="input-label" htmlFor="type">
        Type
      </label>
      <select
        id="type"
        className="input-field"
        value={type}
        onChange={onChangeType}
      >
        <option value="Expense">Expense</option>
        <option value="Income">Income</option>
      </select>
      <label className="input-label" htmlFor="date">
        Date
      </label>
      <input
        id="date"
        type="date"
        className="input-field"
        value={date}
        onChange={onChangeDate}
      />
      <button type="submit" className="add-button">
        Add Transaction
      </button>
      {errorMsg !== "" && <p className="error-message">*{errorMsg}</p>}
    </form>
  );
};

export default ExpenseForm;
