import React from 'react';
import {Link} from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className='container' style={{padding: "1rem", color: "#424242", marginTop: "100px"}}>
            <div className='row text-center mb-4'>
                <h1 className='mt-5' >Open a Zerodha account</h1>
                <p className='mt-3 fw-medium text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='mt-3 p-2 btn btn-primary fs-5 fw-medium' style={{width: "20%", margin: "0 auto"}}>
                    <Link className="nav-link" to="/signup">
                        Signup for free
                    </Link>
                </button>
            </div>
        </div>
     );
}

export default OpenAccount;