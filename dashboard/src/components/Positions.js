import React from "react";
import { positions } from "../data/data";
const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.(₹)</th>
            <th>LTP(₹)</th>
            <th>P&L(₹)</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, idx) => {
            const currVal = stock.price * stock.qty;
            const isProfit = currVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={idx}>
              <td>{stock.product}</td>
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.avg.toFixed(2)}</td>
              <td>{stock.price.toFixed(2)}</td>
              <td className={profClass}>
                {(currVal - stock.avg * stock.qty).toFixed(2)}
              </td>
              <td className={dayClass}>{stock.day}</td>
            </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
