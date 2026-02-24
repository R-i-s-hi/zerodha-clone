import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div
      className="container"
      style={{ marginTop: "8rem", marginBottom: "6rem" }}
    >
      <div className="text-center">
        <h1>The Zerodha Universe</h1>
        <p className="mt-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="justify-content-center" style={{ marginTop: "4rem" }}>
        <div className="row text-center">
          <div className="col-12 col-lg-4 mb-lg-4 mb-5">
            <img src="images/zerodhaFundhouse.png" style={{ width: "50%" }} />
            <p
              className="mt-3 fw-medium text-muted"
              style={{ fontSize: "small" }}
            >
              Our asset management venture <br />
              create strategies, analyze positions and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-12 col-lg-4 mb-lg-4 mb-5">
            <img
              src="images/sensibullLogo.svg"
              height="40px"
              style={{ width: "fit-content" }}
            />
            <p
              className="mt-4 pt-2 fw-medium text-muted"
              style={{ fontSize: "small" }}
            >
              Options trading platform that<br /> lets you
              create simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-12 col-lg-4 mb-4">
            <img src="images/goldenpiLogo.png" style={{ width: "50%" }} />
            <p
              className="mt-3 fw-medium text-muted"
              style={{ fontSize: "small" }}
            >
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains and more.
            </p>
          </div>
        </div>

        <div className="row text-center mt-5">
          <div className="col-12 col-lg-4 mb-lg-4 mb-5">
            <img src="images/streakLogo.png" style={{ width: "45%" }} />
            <p
              className="mt-3 fw-medium text-muted"
              style={{ fontSize: "small" }}
            >
              Systematic trading platform <br />
              that allows you to create backtest <br />
              strategies without coding.
            </p>
          </div>
          <div className="col-12 col-lg-4 mb-lg-4 mb-5">
            <img src="images/smallcaseLogo.png" style={{ width: "50%" }} />
            <p
              className="mt-3 fw-medium text-muted"
              style={{ fontSize: "small" }}
            >
              Thematic investment platform <br />
              that helps you invest in diversified <br />
              baskets of stocks or ETFs.
            </p>
          </div>
          <div className="col-12 col-lg-4 mb-lg-4 mb-5">
            <img src="images/dittoLogo.png" style={{ width: "35%" }} />
            <p
              className="mt-3 fw-medium text-muted"
              style={{ fontSize: "small" }}
            >
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-12">
            <button
              className="mt-5 p-2 btn btn-primary fs-5 fw-medium"
              style={{ width: "35%"}}
            >
              <Link className="nav-link" to="/signup">
                Signup for free
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
