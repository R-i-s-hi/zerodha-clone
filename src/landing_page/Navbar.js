import React from "react";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg fixed-top border-bottom py-3"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container px-5 d-flex justify-content-between">
        <div>
          <a className="navbar-brand" href="#">
            <img
              src="images/logo.svg"
              alt="logo"
              style={{ width: "23%" }}
            ></img>
          </a>
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
                  <a className="nav-link" aria-current="page" href="#">
                    Signup
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Product
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Suppport
                  </a>
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
