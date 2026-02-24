import React from 'react';

function Pricing() {
    return ( 
        <div className='container homeContainer' style={{color: "#424242"}}>
            <div className='flexContainer'>
                <div style={{width: "50%"}}>
                    <div style={{width: "80%"}}>
                        <h1 className='mb-4'>
                            Unbeatable pricing
                        </h1>
                        <p className='fw-medium text-muted'>
                            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                        </p>
                        <a className='fw-medium' href='' style={{textDecoration: "none"}}>See pricing &nbsp;<i class="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
                <div style={{width: "50%"}}>
                    <div className='priceBox text-center w-100'>
                        <div className='border p-2' style={{width: "50%", height: "-webkit-fill-available"}}>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery <br></br> and direct mutual funds</p>
                        </div>
                        <div className='border p-2' style={{width: "50%", height: "-webkit-fill-available"}}>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                    <span className='priceBox2 text-center w-100'>
                        <span className='border p-2' style={{width: "50%", height: "-webkit-fill-available"}}>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery <br></br> and direct mutual funds</p>
                        </span>
                        <span className='border p-2' style={{width: "50%", height: "-webkit-fill-available"}}>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </span>
                    </span>
                </div>
            </div>
        </div>
     );
}

export default Pricing;