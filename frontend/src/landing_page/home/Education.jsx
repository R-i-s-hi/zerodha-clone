import React from 'react';

function Education() {
    return ( 
        <div className='container homeContainer'>
            <div className='flexContainer' style={{color: "#424242"}}>
                <div style={{width: "50%"}}>
                    <img src='images/education.svg' style={{width: "85%"}}></img>
                </div>
                <div style={{width: "50%"}}>
                    <div style={{width: "80%"}}>
                        <h1 className='mb-4'>Free and open market education</h1>
                        <p className='fw-medium text-muted'>Varsity, the largest online stock market education book in the world <br></br> covering everything from the basics to advanced trading.</p>
                        <a className='fw-medium' href='' style={{textDecoration: "none"}}>Varsity &nbsp;<i class="fa-solid fa-right-long"></i></a>
                        <p className='fw-medium text-muted' style={{marginTop: "42px"}}>TradingQ&A, the most active trading and investment community in <br></br> India for all your market related queries.</p>
                        <a className='fw-medium' href='' style={{textDecoration: "none"}}>TradingQ&A &nbsp;<i class="fa-solid fa-right-long"></i></a>
                    </div>                
                </div>
            </div>
        </div>
     );
}

export default Education;