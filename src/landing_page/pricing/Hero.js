import React from "react";
function Hero() {
  return (
    <div className="container" style={{ marginTop: "10rem", color: "#424242" }}>
      <div className="row text-center" style={{ marginBottom: "6.5rem" }}>
        <h1 className="fs-1">Pricing</h1>
        <p className="fs-5 text-muted mt-3">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
      </div>
      <hr></hr>
      <div
        className="row text-center fw-medium"
        style={{
          marginTop: "6.5rem",
          marginBottom: "0rem",
          fontSize: "17px",
          lineHeight: "1.6",
        }}
      >
        <div className="col-4">
          <img src="images/pricingEquity.svg" style={{ width: "60%" }}></img>
          <h3 className="fs-2">Free equity delivery</h3>
          <p className=" mt-4 text-muted">
            All equity delivery investments (NSE, BSE), <br></br> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="images/intradayTrades.svg" style={{ width: "60%" }}></img>
          <h3 className="fs-2">Intraday and F&O trades</h3>
          <p className=" mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="images/pricingEquity.svg" style={{ width: "60%" }}></img>
          <h3 className="fs-2">Free direct MF</h3>
          <p className=" mt-4 text-muted">
            All direct mutual fund investments are <br></br> absolutely free — ₹
            0 commissions & DP<br></br> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
