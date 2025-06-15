import React from "react";
import {Link} from "react-router-dom"

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

      <div
        className="d-row justify-content-center"
        style={{ marginTop: "4rem" }}
      >
        <div className="row text-center">
          <div className="col">
            <img
              src="images/zerodhaFundhouse.png"
              style={{ width: "50%" }}
            ></img>
            <p className="mt-3 fw-medium text-muted" style={{fontSize: "small"}}>Our assest managment venture <br></br> create strategies, analyze positions and examine <br></br> data points like open interest, FII/DII, and more. </p>
          </div>
          <div className="col">
            <img
              src="images/sensibullLogo.svg"
              height={"40px"}
              style={{ width: "fit-content" }}
            ></img>
            <p className="mt-4 pt-2 fw-medium text-muted" style={{fontSize: "small"}}>Options trading platform that lets you <br></br> that is creating simple and transparent index <br></br> fundes to help you save for your goals. </p>
          </div>
          <div className="col">
            <img src="images/goldenpiLogo.png" style={{ width: "50%" }}></img>
            <p className="mt-3 fw-medium text-muted" style={{fontSize: "small"}}>Investment research platform <br></br> that offers detailed insights on stocks, <br></br> sectors, supply chains and more. </p>
          </div>
        </div>
        <div className="row text-center mt-5" >
          <div className="col">
            <img src="images/streakLogo.png" style={{ width: "45%" }}></img>
            <p className="mt-3 fw-medium text-muted" style={{fontSize: "small"}}>Systematic trading platform <br></br> that allows you to create backtest <br></br> strategies without coding. </p>
          </div>
          <div className="col">
            <img src="images/smallcaseLogo.png" style={{ width: "50%" }}></img>
            <p className="mt-3 fw-medium text-muted" style={{fontSize: "small"}}>Thematic investment platform <br></br> that helps you invest in divesified <br></br> baskets of stocks on EFTs. </p>
          </div>
          <div className="col">
            <img src="images/dittoLogo.png" style={{ width: "35%" }}></img>
            <p className="mt-3 fw-medium text-muted" style={{fontSize: "small"}}>Personalized advice on life <br></br> and health insurance.No spam <br></br> and no mis-selling. </p>
          </div>
        </div>
        <div className='row text-center mb-4'>
                <button className='mt-5 p-2 btn btn-primary fs-5 fw-medium' style={{width: "20%", margin: "0 auto"}}>
                  <Link className="nav-link" to="/signup">
                    Signup for free
                  </Link>
                </button>
            </div>
      </div>
    </div>
  );
}

export default Universe;
