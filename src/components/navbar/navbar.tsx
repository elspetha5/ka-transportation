import "./navbar.scss";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-inner-container">
        <img
          className="nav-logo"
          src={`${import.meta.env.BASE_URL}images/kat-logo.png`}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Navbar;
