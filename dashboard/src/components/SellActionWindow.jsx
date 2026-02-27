import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

import axios from "axios";
import "./SellActionWindow.css";
import { toast } from "react-toastify";

const SellActionWindow = ({uid}) => {
  const { closeSellWindow } = useContext(GeneralContext);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 996);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 996);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const handleSellClick = () => {
    console.log("clicked");

  axios.get(`https://zerodha-clone-n5oh.onrender.com/getStock/${uid}`)
    .then((res) => {
      const data = res.data;

      axios.post("https://zerodha-clone-n5oh.onrender.com/sellOrder", {
        ...data,
        mode: "SELL",
      }).then(() => {
        toast.success("Sell order placed successfully!", {
          position: "bottom-left",
        });
        closeSellWindow();
      })
    })
    .catch((err) => {
      console.error("Sell flow failed:", err);
      toast.error("Could not place sell order");
      closeSellWindow();
    });
  };
  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <>
      {isMobile ? (

        <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" style={{color: "red", marginTop: "0"}}>SELL STOCKS</h5>
              <button type="button" className="btn-close" onClick={closeSellWindow}></button>
            </div>
            <div className="modal-body">
              <div className="buttons">
                <span>Brokerage ₹0.03/stock</span>
                <div>
                  <Link className="btn btn-red" onClick={handleSellClick}>
                    Sell
                  </Link>
                  <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      ) : (

        <div className="container" id="buy-window" draggable="true">
          <div className="regular-order">
            <div className="inputs">
                <div className="d-block align-items-center justify-content-start">
                    <h2 style={{color: "red", marginTop: "0", paddingBottom: "1rem", borderBottom: "1px solid #ddd"}}>SELL STOCKS</h2>
                </div> 
            </div>
          </div>

          <div className="buttons">
            <span>Brokerage ₹0.03/stock</span>
            <div>
              <Link className="btn btn-red" onClick={handleSellClick}>
                Sell
              </Link>
              <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
                Cancel
              </Link>
            </div>
          </div>
        </div>
      )}
    </>

  );
};

export default SellActionWindow;