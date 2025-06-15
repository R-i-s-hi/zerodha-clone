import React from "react";

function Footer() {
  return (
    <div className="container mt-5 px-5 border-top" style={{backgroundColor: " #fbfbfb"}}>
      <div className="d-flex justify-content-between mt-5 pt-3">
        <div style={{ width: "30%" }}>
          <img src="images/logo.svg" alt="logo" style={{ width: "45%" }}></img>
          <p className="mt-4 text-muted" style={{fontSize: "14px", fontWeight: "600"}}>
            © 2010 - 2025, Zerodha Broking Ltd. <br></br> All rights reserved.
          </p>
          <div className="d-flex hstack gap-4 fs-5 text-muted mt-4">
            <a href="" className="nav-link">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a href="" className="nav-link">
              <i class="fa-brands fa-square-facebook"></i>
            </a>
            <a href="" className="nav-link">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="" className="nav-link">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <hr />
          <div className="d-flex hstack fs-5 text-muted gap-4">
            <a href="" className="nav-link">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a href="" className="nav-link">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a href="" className="nav-link">
              <i class="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-4">Company</h4>
          <ul className="p-0 vstack text-muted fw-medium gap-2" style={{ listStyleType: "none" }}>
            <li>
              <a href="" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Products
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Pricing
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Referral programme
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Careers
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Zerodha.tech
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Open source
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Press & media
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Zerodha Cares (CSR)
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4">Support</h4>
          <ul className="p-0 vstack text-muted fw-medium gap-2" style={{ listStyleType: "none" }}>
            <li>
              <a href="" className="nav-link">
                Contact us
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Suppport portal
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Z-Connect blog
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                List of charges
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Downloads & resources
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Videos
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Market overview
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                How to file a complaint?
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Status of your complaints
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4">Account</h4>
          <ul className="p-0 vstack text-muted fw-medium gap-2" style={{ listStyleType: "none" }}>
            <li>
              <a href="" className="nav-link">
                Open an account
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Fund transfer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-5 text-muted mb-5" style={{fontSize: "11px"}}>
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF <br></br><br></br>

Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances <br></br><br></br>

Smart Online Dispute Resolution | Grievances Redressal Mechanism <br></br><br></br>

Investments in securities market are subject to market risks; read all the related documents carefully before investing. <br></br><br></br>

Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. <br></br><br></br>

"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.
      </p>
    </div>
  );
}

export default Footer;
