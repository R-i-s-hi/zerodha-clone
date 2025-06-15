import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";

import axios from "axios";
import "./SellActionWindow.css";

const SellActionWindow = ({ uid }) => {

  const { closeSellWindow } = useContext(GeneralContext);
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:5000/getStock/${uid}`)
    .then((res) => {
      setStockData(res.data);  
    })
    .catch((error) => {
      console.error("Error fetching stock data:", error);
    });

  }, [uid]);

  const handleSellClick = () => {
    if (!stockData) return;

    axios.post("http://localhost:5000/sellOrder", {
      ...stockData,
      mode: "SELL",
    });

    closeSellWindow();
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          {stockData ? (
            <div className="d-block align-items-center justify-content-start">
                <h2 style={{color: "red", marginTop: "0", paddingBottom: "1rem", borderBottom: "1px solid #ddd"}}>{stockData.name}</h2>
            
                <div>
                  <p style={{marginTop: "1.8rem", marginBottom: "0.5rem"}}>Current Price: ₹{stockData.price}</p>
                  <p style={{margin: "0"}}>Stock Quantity: {stockData.qty}</p>
                </div>
            </div> 
          ) : ( <p>Please buy the stock to sell</p> )   
        } 
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