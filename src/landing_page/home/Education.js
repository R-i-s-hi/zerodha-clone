import React from 'react';

function Education() {
    return ( 
        <div className='container'>
            <div className='row mt-5 mb-5 px-5'>
                <div className='col-6'>
                    <img src='images/education.svg' style={{width: "75%"}}></img>
                </div>
                <div className='col-6'>
                    <div>
                        <h1 className='mb-4'>Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a href='' style={{textDecoration: "none"}}>Varsity &nbsp;<i class="fa-solid fa-right-long"></i></a>
                        <p className='mt-4'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a href='' style={{textDecoration: "none"}}>TradingQ&A &nbsp;<i class="fa-solid fa-right-long"></i></a>
                    </div>                
                </div>
            </div>
        </div>
     );
}

export default Education;