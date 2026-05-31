import {
  BsArrowDownCircle,
  BsArrowUpCircle,
  BsCashStack,
} from "react-icons/bs";
import "./index.css";

const ExpenseSummary = (props) => {
  const { expensesList } = props;

  const income = expensesList
    .filter((eachExpense) => eachExpense.type === "Income")
    .reduce((total, eachExpense) => total + eachExpense.amount, 0);

  const expense = expensesList
    .filter((eachExpense) => eachExpense.type === "Expense")
    .reduce((total, eachExpense) => total + eachExpense.amount, 0);

  const balance = income - expense;

  return (
    <ul className="summary-list">
      <li className="summary-card balance-card">
        <BsCashStack className="summary-icon" />
        <div>
          <p className="summary-label">Balance</p>
          <p className="summary-value">₹{balance}</p>
        </div>
      </li>
      <li className="summary-card income-card">
        <BsArrowUpCircle className="summary-icon" />
        <div>
          <p className="summary-label">Income</p>
          <p className="summary-value">₹{income}</p>
        </div>
      </li>
      <li className="summary-card expense-card">
        <BsArrowDownCircle className="summary-icon" />
        <div>
          <p className="summary-label">Expense</p>
          <p className="summary-value">₹{expense}</p>
        </div>
      </li>
    </ul>
  );
};

export default ExpenseSummary;
