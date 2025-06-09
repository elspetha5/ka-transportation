import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <img className="nav-logo" src="/kat-logo.png" alt="logo" />
        <Link className="nav-link" to="#">
          Pay
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
