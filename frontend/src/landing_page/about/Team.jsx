import React from "react";

function Team() {
  return (
    <div className="container" style={{color: "#424242"}}>
      <div className="text-center">
          <h1>People</h1>
      </div>
      <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center fw-medium text-muted teamContainer">
        <div class="d-flex flex-column justify-content-center align-items-center gap-3 w-75 w-lg-50">
          <img
            className="rounded-circle w-lg-50 w-75"
            src="images/nithinKamath.jpg"
            alt="..."
          ></img>
          <div className="text-center">
            <h4>
                Nithin Kamath
            </h4>
            <p>
                Founder, CEO
            </p>
          </div>
        </div>
        <div class="d-flex align-items-top w-75 w-lg-50 pt-5" style={{lineHeight: "1.6", height: "stretch"}}>
          <p class="mb-0 text-lg-start text-center">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry. He
            is a member of the SEBI Secondary Market Advisory Committee (SMAC)
            and the Market Data Advisory Committee (MDAC). Playing basketball is
            his zen.
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
