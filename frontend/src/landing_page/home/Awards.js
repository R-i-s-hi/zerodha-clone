import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5 mb-5' style={{color: "#424242"}}>
            <div className='row'>
                <div className='col-lg-6 p-5'>
                    <img src='images/largestBroker.svg' alt='largestBroker'></img>
                </div>
                <div className='col-lg-6 p-5'>
                    <h1 className='mb-3'>Largest stock broker in India</h1>
                    <p className='mb-5 fw-medium '>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india by trading and investing in:</p>
                    <div className='row mb-5 fw-medium text-muted'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Futures and Options</p>
                                </li>
                                <li>
                                    <p>Comodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bounds & Gov. Securities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='images/pressLogos.png' alt='press-Logos' style={{width: "90%"}}></img>
                </div>
            </div>
        </div>
     );
}

export default Awards;