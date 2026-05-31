import { BsTrash } from "react-icons/bs";
import "./index.css";

const ExpenseItem = (props) => {
  const { expenseDetails, deleteExpense } = props;
  const { id, title, amount, category, type, date } = expenseDetails;
  const isIncome = type === "Income";
  const amountClassName = isIncome ? "income-amount" : "spend-amount";

  const onDeleteExpense = () => {
    deleteExpense(id);
  };

  return (
    <li className="expense-item">
      <div className="expense-main-details">
        <p className="expense-title">{title}</p>
        <p className="expense-meta">
          {category} • {date}
        </p>
      </div>
      <p className={`transaction-amount ${amountClassName}`}>
        {isIncome ? "+" : "-"}₹{amount}
      </p>
      <button
        type="button"
        className="delete-button"
        onClick={onDeleteExpense}
        aria-label={`Delete ${title}`}
      >
        <BsTrash />
      </button>
    </li>
  );
};

export default ExpenseItem;
