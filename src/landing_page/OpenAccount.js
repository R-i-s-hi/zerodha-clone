import React from 'react';

function OpenAccount() {
    return ( 
        <div className='container' style={{padding: "1rem"}}>
            <div className='row text-center mb-4'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p className='mt-3'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='mt-3 p-2 btn btn-primary fs-5 fw-medium' style={{width: "20%", margin: "0 auto"}}> Signup for free</button>
            </div>
        </div>
     );
}

export default OpenAccount;