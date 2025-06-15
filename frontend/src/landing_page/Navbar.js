import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top border-bottom py-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container px-5 d-flex justify-content-between">
        <div>
          <Link className="navbar-brand" to="/">
            <img
              src="images/logo.svg"
              alt="logo"
              style={{ width: "23%" }}
            ></img>
          </Link>
        </div>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex " role="search">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 hstack gap-4">
                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Suppport
                  </Link>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
