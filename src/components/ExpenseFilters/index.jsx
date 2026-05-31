import { BsSearch, BsTrash } from "react-icons/bs";
import "./index.css";

const filterOptions = ["All", "Income", "Expense"];

const ExpenseFilters = (props) => {
  const {
    searchInput,
    onChangeSearchInput,
    activeType,
    updateActiveType,
    clearAllExpenses,
    hasExpenses,
  } = props;

  return (
    <div className="filters-container">
      <div>
        <h1 className="transactions-heading">Transactions</h1>
        <p className="transactions-description">Recent records</p>
      </div>
      <div className="filter-controls-container">
        <div className="search-container">
          <BsSearch className="search-icon" />
          <input
            type="search"
            className="search-input"
            placeholder="Search title"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
        </div>
        <div className="type-tabs-container">
          {filterOptions.map((eachOption) => {
            const activeClassName =
              activeType === eachOption ? "active-type-button" : "";
            return (
              <button
                key={eachOption}
                type="button"
                className={`type-button ${activeClassName}`}
                onClick={() => updateActiveType(eachOption)}
              >
                {eachOption}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          className="clear-button"
          onClick={clearAllExpenses}
          disabled={!hasExpenses}
          aria-label="Clear all transactions"
        >
          <BsTrash />
        </button>
      </div>
    </div>
  );
};

export default ExpenseFilters;
