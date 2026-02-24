import React from "react";
function Hero() {
  return (
    <>
      <div className='container topContainer text-center' style={{color: "#424242" }}>
        <h1>Pricing</h1>
        <p className="text-muted mt-3 mb-5">
          Free equity investments and flat ₹20 traday and F&O trades
        </p>
        <hr></hr>
      </div>
      <div className="d-flex justify-content-between align-items-center flex-lg-row flex-column text-center fw-medium container gap-3 mb-lg-5 mb-4" style={{ fontSize: "17px", lineHeight: "1.6" }}>
        <div class="w-33" style={{height: "stretch"}}>
          <img className="w-75" src="images/pricingEquity.svg" style={{ height: "150px" }}></img>
          <h3>Free equity delivery</h3>
          <p className=" mt-4 text-muted">
            All equity delivery investments (NSE, BSE), <br></br> are absolutely
            free, means now ₹ 0 brokerage.
          </p>
        </div>
        <div class="w-33">
          <img className="w-75" src="images/intradayTrades.svg" style={{ height: "150px" }}></img>
          <h3>Intraday & F&O trades</h3>
          <p className=" mt-4 text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
        <div class="w-33">
          <img className="w-75" src="images/pricingEquity.svg" style={{ height: "150px" }}></img>
          <h3>Free direct MF</h3>
          <p className=" mt-4 text-muted">
            All direct mutual fund investments are <br></br> absolutely free — ₹
            0 commissions & DP<br></br> charges.
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
