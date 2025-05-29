import React from "react";

function Team() {
  return (
    <div className="container" style={{color: "#424242"}}>
        <div className="text-center">
            <h1>People</h1>
        </div>
      <div
        className="d-flex justify-content-center fw-medium text-muted"
        style={{ marginTop: "6.5rem",marginBlock: "4.5rem" , fontSize: "17px", lineHeight: "1.6" }}
      >
        <div className="text-end" style={{ paddingRight: "9rem" }}>
          <img
            className="rounded-circle"
            style={{ width: "65%" }}
            src="images/nithinKamath.jpg"
            alt="..."
          ></img>
          <div className="text-center mt-4" style={{paddingLeft: "10rem"}}>
            <h4>
                Nithin Kamath
            </h4>
            <p>
                Founder, CEO
            </p>
          </div>
        </div>
        <div style={{lineHeight: "1.6", marginLeft: "-4rem"}}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br></br>
            hurdles he faced during his decade long stint as a trader. Today, <br></br>
            Zerodha has changed the landscape of the Indian broking industry. <br></br> <br></br> He
            is a member of the SEBI Secondary Market Advisory Committee <br></br> (SMAC)
            and the Market Data Advisory Committee (MDAC). <br></br> <br></br> Playing basketball is
            his zen. <br></br> <br></br>
            Connect on Homepage / TradingQnA / Twitter
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
