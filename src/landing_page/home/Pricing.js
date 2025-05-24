import React from 'react';

function Pricing() {
    return ( 
        <div className='container' style={{color: "#424242", marginTop: "100px"}}>
            <div className='row mt-5 mb-5 px-5'>
                <div className='col-4'>
                    <h1 className='mb-4'>
                        Unbeatable pricing
                    </h1>
                    <p className='fw-medium text-muted'>
                        We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a className='fw-medium' href='' style={{textDecoration: "none"}}>See pricing &nbsp;<i class="fa-solid fa-right-long"></i></a>
                </div>
                <div className='col-2'>

                </div>
                <div className='col-6'>
                    <div className='row text-center'>
                        <div className='col p-4 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery <br></br> and direct mutual funds</p>
                        </div>
                        <div className='col p-4 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;