import React from 'react';

function Awards() {
    return ( 
        <div className='container homeContainer' style={{color: "#424242"}}>
            <div className='flexContainer w-100'>
                <div style={{width: "50%"}}>
                    <img className="award-img" src='images/largestBroker.svg' alt='largestBroker'></img>
                </div>
                <div style={{width: "50%"}}>
                    <h1 className='mb-3 fs-2'>Largest stock broker in India</h1>
                    <p className='fw-medium' style={{marginBottom: '2rem', fontSize: '14px'}}>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india by trading and investing in:</p>
                    <div className='d-flex justify-content-between align-items-center mb-3 fw-medium text-muted w-100'>
                        <div className='w-50'>
                            <ul style={{fontSize: '14px'}}>
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
                        <div className='w-50'>
                            <ul style={{fontSize: '14px'}}>
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