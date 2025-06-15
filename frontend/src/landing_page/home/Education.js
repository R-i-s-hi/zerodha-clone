import React from 'react';

function Education() {
    return ( 
        <div className='container' style={{marginTop: "100px"}}>
            <div className='row mt-5 mb-5 px-5' style={{color: "#424242"}}>
                <div className='col-6'>
                    <img src='images/education.svg' style={{width: "75%"}}></img>
                </div>
                <div className='col-6 ps-5 pt-3'>
                    <div className='ps-5'>
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