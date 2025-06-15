import React from "react";
function Brokerage() {
  return (
    <div
      className="container"
      style={{ marginTop: "5rem", marginBottom: "5rem" }}
    >
      <h1 className="mb-4 text-center">Equity</h1>
      <table class="table table-hover table-borderless border text-start mb-5 pe-0">
        <thead>
          <tr className="border-bottom">
            <th scope="col"></th>
            <th
              scope="col"
              className="py-3"
              style={{ color: "#424242", fontSize: "14px" }}
            >
              Equity delivery
            </th>
            <th
              scope="col"
              className="py-3"
              style={{ color: "#424242", fontSize: "14px" }}
            >
              Equity intraday
            </th>
            <th
              scope="col"
              className="py-3"
              style={{ color: "#424242", fontSize: "14px" }}
            >
              F&O - Futures
            </th>
            <th
              scope="col"
              className="py-3"
              style={{ color: "#424242", fontSize: "14px" }}
            >
              F&O - Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th
              scope="row"
              className="py-3"
              style={{
                color: "#666666",
                fontSize: "14.4px",
                paddingLeft: "1.1rem",
              }}
            >
              Brokerage
            </th>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              Zero Brokerage
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.03% or Rs. 20/executed <br></br> order whichever is lower
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.03% or Rs. 20/executed <br></br> order whichever is lower
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              Flat Rs. 20 per executed order
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              style={{
                color: "#666666",
                fontSize: "14.4px",
                paddingLeft: "1.1rem",
              }}
            >
              STT/CTT
            </th>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.1% on buy & sell
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.025% on the sell side
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.02% on the sell side
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.125% of the intrinsic value on <br></br> options that are bought
              & exercised<br></br> and 0.1% on sell side (on premium)
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              style={{
                color: "#666666",
                fontSize: "14.4px",
                paddingLeft: "1.1rem",
              }}
            >
              Transaction charges
            </th>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              NSE: 0.00297% <br></br>BSE: 0.00375%
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              NSE: 0.00297% <br></br>BSE: 0.00375%
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              NSE: 0.00173%<br></br>BSE: 0
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              NSE: 0.03503% (on premium)<br></br>BSE: 0.0325% (on premium)
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              style={{
                color: "#666666",
                fontSize: "14.4px",
                paddingLeft: "1.1rem",
              }}
            >
              GST
            </th>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              18% on (brokerage + SEBI<br></br> charges + transaction <br></br>{" "}
              charges)
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              18% on (brokerage + SEBI <br></br> charges + transaction <br></br>
              charges)
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              18% on (brokerage + SEBI<br></br> charges + transaction <br></br>
              charges)
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              18% on (brokerage + SEBI <br></br>charges + transaction<br></br>{" "}
              charges)
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              style={{
                color: "#666666",
                fontSize: "14.4px",
                paddingLeft: "1.1rem",
              }}
            >
              SEBI charges
            </th>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              ₹10 / crore
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              ₹10 / crore
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              ₹10 / crore
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              ₹10 / crore
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              style={{
                color: "#666666",
                fontSize: "14.4px",
                paddingLeft: "1.1rem",
              }}
            >
              Stamp charges
            </th>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.015% or ₹1500 / crore on<br></br> buy side
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.003% or ₹300 / crore on<br></br> buy side
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.002% or ₹200 / crore on<br></br> buy side
            </td>
            <td className="py-3" style={{ color: "#424242", fontSize: "14px" }}>
              0.003% or ₹300 / crore on buy side
            </td>
          </tr>
        </tbody>
      </table>
      <h1 className="mb-4">Charges explained</h1>
      <div className="d-flex justify-content-between">
        <div className="w-50 text-muted" style={{fontSize: "small", lineHeight: "1.4"}}>
          <b>Securities/Commodities transaction tax</b>
          <br></br>
          Tax by the government when transacting on the exchanges. Charged as
          above on both buy<br></br> and sell sides when trading equity
          delivery. Charged only on selling side when trading<br></br> intraday
          or on F&O.<br></br>
          <br></br> When trading at Zerodha, STT/CTT can be a lot more than the
          brokerage we charge.<br></br> Important to keep a tab.<br></br>
          <br></br>
          <b>Transaction/Turnover Charges</b>
          <br></br> Charged by exchanges (NSE, BSE, MCX) on the value of your
          transactions.<br></br>
          <br></br> BSE has revised transaction charges in XC, XD, XT, Z and ZP
          groups to ₹10,000 per crore<br></br> w.e.f 01.01.2016. (XC and XD
          groups have been merged into a new group X w.e.f 01.12.2017)<br></br>
          <br></br>
          BSE has revised transaction charges in SS and ST groups to ₹1,00,000
          per crore of gross<br></br> turnover.<br></br>
          <br></br> BSE has revised transaction charges for group A, B and other
          non exclusive scrips (non-<br></br>exclusive scrips from group E, F,
          FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate<br></br>{" "}
          basis w.e.f. December 1, 2022.<br></br>
          <br></br> BSE has revised transaction charges in M, MT, TS and MS
          groups to ₹275 per crore of gross<br></br>
          turnover.<br></br>
          <br></br> <b>Call & trade</b>
          <br></br> Additional charges of ₹50 per order for orders placed
          through a dealer at Zerodha including<br></br> auto square off orders.
          <br></br>
          <br></br>
          <b>Stamp charges</b>
          <br></br> Stamp charges by the Government of India as per the Indian
          Stamp Act of 1899 for<br></br> transacting in instruments on the stock
          exchanges and depositories.<br></br>
          <br></br> <b>NRI brokerage charges</b>
          <br></br> ₹100 per order for futures and options.<br></br> For a
          non-PIS account, 0.5% or ₹100 per executed order for equity (whichever
          is lower).<br></br> For a PIS account, 0.5% or ₹200 per executed order
          for equity (whichever is lower).<br></br> ₹500 + GST as yearly account
          maintenance charges (AMC) charges.<br></br>
          <br></br> <b>Account with debit balance</b>
          <br></br> If the account is in debit balance, any order placed will be
          charged ₹40 per executed order<br></br> instead of ₹20 per executed
          order.<br></br>
          <br></br>
          <b>Charges for Investor's Protection Fund Trust (IPFT) by NSE</b>
          <br></br> Equity and Futures - ₹10 per crore + GST of the traded
          value.<br></br> Options - ₹50 per crore + GST traded value (premium
          value).<br></br> Currency - ₹0.05 per lakh + GST of turnover for
          Futures and ₹2 per lakh + GST of premium for Options.<br></br>
          <br></br> <b>Margin Trading Facility (MTF)</b>
          <br></br> MTF Interest: 0.04% per day (₹40 per lakh) on the funded
          amount. The interest is applied<br></br> from T+1 day until the day
          MTF stocks are sold.<br></br> MTF Brokerage: 0.3% or Rs. 20/executed
          order, whichever is lower.<br></br> MTF pledge charge: ₹15 + GST per
          pledge and unpledge request per ISIN.
        </div>
        <div className="w-50 text-muted" style={{fontSize: "small", lineHeight: "1.4"}}>
          <b>GST</b><br></br> Tax levied by the government on the services rendered. 18% of (
          brokerage + SEBI charges<br></br> + transaction charges)<br></br><br></br> <b>SEBI Charges</b><br></br> Charged
          at ₹10 per crore + GST by Securities and Exchange Board of India for
          regulating the<br></br> markets.<br></br><br></br> <b>DP (Depository participant) charges</b><br></br> ₹15.34 per
          scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is charged on the
          trading<br></br> account ledger when stocks are sold, irrespective of quantity.<br></br><br></br>
          Female demat account holders (as first holder) will enjoy a discount
          of ₹0.25 per transaction<br></br> on the CDSL fee.<br></br><br></br> Debit transactions of mutual
          funds & bonds get an additional discount of ₹0.25 on the CDSL<br></br> fee.<br></br><br></br>
          <b>Pledging charges</b><br></br> ₹30 + GST per pledge request per ISIN.<br></br><br></br> <b>AMC (Account
          maintenance charges)</b><br></br> For BSDA demat account: Zero charges if the
          holding value is less than ₹4,00,000. To learn<br></br> more about BSDA, Click
          here<br></br><br></br> For non-BSDA demat accounts: ₹300/year + 18% GST charged
          quarterly (90 days). To learn<br></br> more about AMC, Click here<br></br><br></br> <b>Corporate
          action order charges</b><br></br> ₹20 plus GST will be charged for OFS / buyback /
          takeover / delisting orders placed through<br></br> Console.<br></br><br></br> <b>Off-market
          transfer charges</b><br></br> ₹25 per transaction.<br></br><br></br> <b>Physical CMR request</b><br></br> First CMR
          request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent
          requests.<br></br><br></br> <b>Payment gateway charges</b><br></br> ₹9 + GST (Not levied on transfers
          done via UPI)<br></br><br></br> <b>Delayed Payment Charges</b><br></br> Interest is levied at 18% a year
          or 0.05% per day on the debit balance in your trading<br></br> account. Learn
          more.<br></br><br></br> <b>Trading using 3-in-1 account with block functionality</b><br></br> Delivery &
          MTF Brokerage: 0.5% per executed order.<br></br> Intraday Brokerage: 0.05% per
          executed order.
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
