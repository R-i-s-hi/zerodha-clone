import { watchlist } from "../data/data";
import { DoughnoutGraph } from "./DoughnoutGraph";
import { WatchListItem } from "./WatchList";

const Summary = ({username}) => {

  const displayName = username || "anonymous";

  const labels = watchlist.map((subArray) => subArray["name"]); // creates an array containing names of holdings
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return (
    <>
      <div class="summary-section">
        <button
          class="watchlistToggleBtn d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#summaryWatchlist"
          aria-controls="summaryWatchlist"
          data-bs-backdrop="false"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.249 12.001L3.54102 12.001M6.74928 8.00098L2.75195 12.0008L6.74928 16.001M17.2497 16.001L21.2471 12.0011L17.2497 8.00098" stroke="#535353" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

        </button>

        <div
          class="offcanvas offcanvas-start"
          tabindex="-1"
          id="summaryWatchlist"
          aria-labelledby="summaryWatchlistLabel"
        >
          <div class="offcanvas-header"> 
            <h5 class="offcanvas-title" id="summaryWatchlistLabel">Watchlist</h5> 
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
          </div> 
          <div class="offcanvas-body"> 
            
            <div className="watchlist-container-offcanvas">
              <div className="indices-container">
                <div className="nifty">
                  <p className="index">NIFTY 50</p>
                  <p className="index-points">{100.2} </p>
                  <p className="percent"> </p>
                </div>
                <div className="sensex">
                  <p className="index">SENSEX</p>
                  <p className="index-points">{100.2}</p>
                  <p className="percent"></p>
                </div>
              </div>
              <div className="search-container">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                  className="search"
                />
                <span className="counts"> {watchlist.length} / 50</span>
              </div>

              <ul className="list">
                {watchlist.map((stock, index) => {
                  return <WatchListItem stock={stock} key={index} />;
                })}
              </ul>
              <DoughnoutGraph data={data} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="username">
        <h6>Hi, {displayName}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
