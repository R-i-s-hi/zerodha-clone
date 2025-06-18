import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

import axios from "axios";
import "./SellActionWindow.css";
import { toast } from "react-toastify";

const SellActionWindow = ({uid}) => {

  const { closeSellWindow } = useContext(GeneralContext);
  const [stockData, setStockData] = useState({});

  const handleSellClick = () => {
    axios.get(`https://zerodha-clone-n5oh.onrender.com/getStock/${uid}`)
      .then(res => {
        setStockData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch stock data:", err);
      });

    axios.post("https://zerodha-clone-n5oh.onrender.com/sellOrder", {
      ...stockData,
      mode: "SELL",
    });
    toast.success("Sell order placed successfully!", {
      position: "bottom-left",});  
    closeSellWindow();
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
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
  );
};

export default SellActionWindow;