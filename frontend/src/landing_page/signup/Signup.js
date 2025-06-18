import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import OpenAccount from "../OpenAccount";

function Signup() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  


  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if(name === "email") {
      setEmail(value);
    } else if (name === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };
  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      if (!email || !password || !username) {
        handleError("All fields are required");
        return;
      }

      const { data } = await axios.post("https://zerodha-clone-n5oh.onrender.com/api/signup", {email, username, password}, { 
        withCredentials: true,
        headers: { "Content-Type": "application/json" }
      });
      const { success, message} = data;

      if (success && data.redirectTo) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = data.redirectTo; // redirect to dashboard after successful signup
        }, 2000);
      } else {
        handleError(message || "Signup failed");
      }

    } catch (error) {
      console.log("Signup Error:", error);
      handleError(error.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setEmail("");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="container" style={{ marginTop: "11rem" }}>
      <div className="text-center" style={{marginBottom: "5.5rem"}}>
        <h1 className="fs-1">Open a free demat and trading account online</h1>
        <p className="fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="d-flex justify-content-center" style={{marginBottom: "5.5rem"}}>
        <img src="images/account_open.svg" style={{width: "45%", paddingRight: "4rem"}}></img>
        <div style={{marginLeft: "-1rem"}}>
          <div className="form_container">
            <h2 className="pb-2" style={{width: "fit-content", marginBottom: "1.5rem", borderBottom: "2px solid #424242"}}>Signup Now</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label><br></br>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Username</label><br></br>
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label><br></br>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button  type="submit" className="signup-btn">Submit</button><br></br>
              <span style={{fontSize: "small"}}>
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      <h1 className="text-center" style={{marginTop: "5.5rem",marginBottom: "5.5rem"}}>Investment options with Zerodha demat account</h1>
      <div className="d-flex justify-content-center" style={{marginBottom: "5.5rem"}}>
        <div className="d-flex">
            <img src="images/stocks-acop.svg" style={{width: "45%"}}></img>
            <div className="ms-4">
                <h3>Stocks</h3>
                <p style={{width: "200px", lineHeight: "1.7"}}>Invest in all exchange-listed <br></br> securities</p>
            </div>
        </div>
        <div style={{width: "9rem"}}></div>
        <div className="d-flex">
            <img src="images/mf-acop.svg" style={{width: "50%"}}></img>
            <div className="ms-4">
                <h3>Mutual funds</h3>
                <p style={{width: "250px", lineHeight: "1.7"}}>Invest in commission-free direct <br></br> mutual funds</p>
            </div>
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{marginBottom: "5.5rem"}}>
        <div className="d-flex">
            <img src="images/ipo-acop.svg" style={{width: "50%"}}></img>
            <div className="ms-4">
                <h3>IPO</h3>
                <p style={{width: "250px", lineHeight: "1.7"}}>Apply to the latest IPOs instantly <br></br> via UPI</p>
            </div>
        </div>
        <div style={{width: "7rem"}}></div>
        <div className="d-flex" >
            <img src="images/fo-acop.svg" style={{width: "50%"}}></img>
            <div className="ms-4">
                <h3>Futures & options</h3>
                <p style={{width: "250px", lineHeight: "1.7"}}>Hedge and mitigate market risk <br></br> through simplified F&O trading</p>
            </div>
        </div>
      </div>
      <OpenAccount/>
    </div>
  );
}

export default Signup;
