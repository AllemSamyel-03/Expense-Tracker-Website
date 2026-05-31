import { BsWallet2 } from "react-icons/bs";
import "./index.css";

const Header = () => (
  <header className="header-container">
    <div className="header-content">
      <div className="logo-container">
        <BsWallet2 className="logo-icon" />
      </div>
      <div>
        <h1 className="app-heading">Expense Tracker</h1>
        <p className="app-description">Personal budget workspace</p>
      </div>
    </div>
  </header>
);

export default Header;
