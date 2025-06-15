import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate(); 
  const handleLogout = async () => {
      try {
        await axios.post("http://localhost:5000/api/logout", {}, { withCredentials: true });
        removeCookie("token");
        toast.success("Logged out successfully!", { position: "bottom-left" });
        setTimeout(() => {
          window.location.href="http://localhost:3000/login"
        }, 1000); // Redirect to login
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

  const menuClass = "menu";
  const menuSelectedClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration: "none"}} to="/" onClick={() => handleMenuClick(0)}>
            <p className={selectedMenu === 0 ? menuSelectedClass : menuClass}>Dashboard</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/orders" onClick={() => handleMenuClick(1)}>
            <p className={selectedMenu === 1 ? menuSelectedClass : menuClass}>Orders</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/holdings" onClick={() => handleMenuClick(2)}>
            <p className={selectedMenu === 2 ? menuSelectedClass : menuClass}>Holdings</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/positions" onClick={() => handleMenuClick(3)}>
            <p className={selectedMenu === 3 ? menuSelectedClass : menuClass}>Positions</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/funds" onClick={() => handleMenuClick(4)}>
            <p className={selectedMenu === 4 ? menuSelectedClass : menuClass}>Funds</p>
             </Link>
          </li>
          <li>
            <Link style={{textDecoration: "none"}} to="/apps" onClick={() => handleMenuClick(5)}>
            <p className={selectedMenu === 5 ? menuSelectedClass : menuClass}>Apps</p>
            </Link>
          </li>
          <li>
            <p style={{textDecoration: "none", cursor: "pointer"}} onClick={handleLogout} className={selectedMenu === 6 ? menuSelectedClass : menuClass}>Logout</p>
          </li>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;