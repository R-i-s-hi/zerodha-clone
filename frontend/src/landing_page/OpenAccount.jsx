import React from 'react';
import {Link} from "react-router-dom";

function OpenAccount() {
    return ( 
        <div className='container' style={{color: "#424242"}}>
            <div className='row text-center mb-4'>
                <h1>Open a Zerodha account</h1>
                <p className='mt-3 fw-medium text-muted'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='w-l-50 mt-3 p-2 btn btn-primary fs-6 fw-medium mx-auto' style={{width: "200px"}}>
                    <Link className="nav-link" to="/signup">
                        Signup for free
                    </Link>
                </button>
            </div>
        </div>
     );
}

export default OpenAccount;