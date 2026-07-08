import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import OpenAccount from "../OpenAccount";



const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const handleError = (msg) =>
    toast.error(msg, {
      position: "bottom-left",
  });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {                                                                
      const {data} = await axios.post("https://zerodha-clone-dashboard-plum.vercel.app/api/login", {email, password}, {
        withCredentials: true,
        headers: { "Content-Type": "application/json"}
      });
          
      if (data.success) {
        handleSuccess(data.message);
        setTimeout(() => {
          window.location.href = data.redirectTo; // redirect to dashboard after successful login
        }, 1500);
      }
    }
    catch (error) {
      console.log(error);
      handleError("Something went wrong!");
    } 
    finally {
      setEmail("");
      setPassword("");
    }
  };



  return (
    <div className="container topContainer">
      <div className="text-center" style={{marginBottom: "5.5rem"}}>
        <h1 className="fs-1">Open a free demat and trading account online</h1>
        <p className="fw-medium">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      
      <div className="d-flex flex-lg-row flex-column justify-content-lg-space-between justify-content-center align-items-center gap-5" style={{marginBottom: "5.5rem"}}>
        <img className="w-lg-50 w-75" src="images/account_open.svg"></img>
        <div className="w-lg-50 w-75">
          <h2 className="pb-2 signupHeading">Login</h2>
          <div className="form_container">
            <form className="signup-form" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div class="d-flex flex-column align-items-lg-start align-items-center w-100" style={{marginTop: "1.5rem"}}>
                <button  type="submit" className="signup-btn">Submit</button>
                <span style={{fontSize: "small"}}>
                  Don't have an account? <Link to={"/Signup"}> <span style={{fontSize: "small"}} >Signup</span></Link>
                </span>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
      
      <h1 className="text-center" style={{marginTop: "5.5rem",marginBottom: "5.5rem"}}>Investment options with Zerodha demat account</h1>
      
      <div className="d-flex flex-column justify-content-center gap-lg-5 gap-3" style={{marginBottom: "5.5rem"}}>
        <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center gap-lg-0 gap-3">
          <div className="d-flex w-lg-50 w-75 justify-content-lg-start justify-content-center">
              <img src="images/stocks-acop.svg" class="investImgs"></img>
              <div className="ms-4">
                  <h3>Stocks</h3>
                  <p style={{lineHeight: "1.7"}}>Invest in all exchange-listed <br></br> securities</p>
              </div>
          </div>
          <div className="d-flex justify-content-lg-end justify-content-center w-lg-50 w-75 ms-lg-0 ms-lg-3">
              <img src="images/mf-acop.svg" class="investImgs"></img>
              <div className="ms-4">
                  <h3>Mutual funds</h3>
                  <p style={{lineHeight: "1.7"}}>Invest in commission-free direct <br></br> mutual funds</p>
              </div>
          </div>
        </div>
        
        <div className="d-flex flex-lg-row flex-column justify-content-center align-items-center gap-lg-0 gap-3">
          <div className="d-flex w-lg-50 w-75 justify-content-lg-start justify-content-center">
              <img src="images/ipo-acop.svg" class="investImgs"></img>
              <div className="ms-4">
                  <h3>IPO</h3>
                  <p style={{lineHeight: "1.7"}}>Apply to the latest IPOs instantly <br></br> via UPI</p>
              </div>
          </div>
          <div className="d-flex justify-content-lg-end justify-content-center w-lg-50 w-100" >
              <img src="images/fo-acop.svg" class="investImgs"></img>
              <div className="ms-4">
                  <h3>Futures & options</h3>
                  <p style={{lineHeight: "1.7"}}>Hedge and mitigate market risk <br></br> through simplified F&O trading</p>
              </div>
          </div>
        </div>
      </div>



      <OpenAccount/>
    </div>
  );
};

export default Login;