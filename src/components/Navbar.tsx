import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm fixed-top"
      style={{
        background:
          "linear-gradient(30deg, #2e7d32, #66bb6a, #71d676ff, #66bb6a, #2e7d32)",
      }}
    >
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          <i className="fa-solid fa-leaf"></i> <b>PLANT SHOP</b>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample01"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarsExample01">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link px-3 text-white link-success" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white link-success" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white link-success" to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white link-success" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3 text-white link-success" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <Link to="/" className="text-light px-3">
          <i className="fa-solid fa-cart-shopping text-light fa-xl px-3"></i>
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
