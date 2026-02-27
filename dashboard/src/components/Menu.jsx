import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";


const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const [, removeCookie] = useCookies(["token"]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  }

  const handleProfileClick = (index) => {
    setIsProfileDropdown(!isProfileDropdown);
  }

  const handleLogout = async () => {
      try {
    // 1. Call backend logout endpoint to clear the HTTP-only cookie
    await axios.post(
      "https://zerodha-clone-n5oh.onrender.com/api/logout", 
      {},
      { 
        withCredentials: true // Necessary for cookies to be sent
      }
    );
    
    // 2. Clear any client-side storage (optional cleanup)
    localStorage.removeItem("token"); // Remove if you were previously using this
    localStorage.removeItem("userData"); // Remove any other auth-related data
    toast.success("Logged out successfully", {
      position: "bottom-left",
    });
    // 3. Redirect to login page
    setTimeout(() => {
      window.location.href = "https://zerodha-clone-landing-page.onrender.com/login";
    }, 1000);
    
  } catch (error) {
    console.error("Logout failed:", error);
    // Fallback: Redirect even if API call fails
    window.location.href = "https://zerodha-clone-landing-page.onrender.com/login";
  }
  };

  const menuClass = "menu";
  const menuSelectedClass = "menu selected";

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light menu-container">
        <div className="container-fluid">

          <Link className="navbar-brand" to="/">
            <img src="logo.png" alt="Logo" style={{ width: "50px" }} />
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation" >
            <span>
              <i class="lni lni-menu-hamburger-1"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMenu">
            
            <div className="d-flex justify-content-end"> <button className="btn-close mt-2 me-2 d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-label="Close" ></button> </div>

            <ul className="d-flex justify-content-center align-items-center gap-4 ms-auto mb-2 mb-lg-0" style={{fontSize: "13.5px",listStyleType: "none"}}>
              <li className="nav-item">
                <Link className={`nav-link ${ selectedMenu === 0 ? "active fw-bold" : "" }`} to="/" onClick={() => handleMenuClick(0)}
                >
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ selectedMenu === 1 ? "active fw-bold" : "" }`} to="/orders" onClick={() => handleMenuClick(1)}
                >
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ selectedMenu === 2 ? "active fw-bold" : "" }`} to="/holdings" onClick={() => handleMenuClick(2)}
                >
                  Holdings
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ selectedMenu === 3 ? "active fw-bold" : "" }`} to="/positions" onClick={() => handleMenuClick(3)}
                >
                  Positions
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ selectedMenu === 4 ? "active fw-bold" : "" }`} to="/funds" onClick={() => handleMenuClick(4)}
                >
                  Funds
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${ selectedMenu === 5 ? "active fw-bold" : "" }`} to="/apps" onClick={() => handleMenuClick(5)}
                >
                  Apps
                </Link>
              </li>
              <li className="nav-item">
                <span className={`nav-link ${ selectedMenu === 6 ? "active fw-bold" : "" }`} style={{ cursor: "pointer" }} onClick={handleLogout} >
                  Logout
                </span>
              </li>
            </ul>

          </div>

          <div className="d-flex align-items-center ms-2 profileDiv">
            <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center" style={{ width: "40px", height: "40px" }} >
              ZU
            </div>
          </div>
        </div>
      </nav>
      <ToastContainer />
    </>
  );
};

export default Menu;