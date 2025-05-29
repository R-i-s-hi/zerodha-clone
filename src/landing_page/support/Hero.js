import React from 'react';
function Hero() {
    return ( 
        <div className= 'bg-primary text-white' style={{paddingTop: "8rem", paddingLeft: "9rem", paddingRight: "9rem"}}>
            <div className='d-flex justify-content-between'>
                <h3 className='fs-5 fw-semibold'>Suppport Portal</h3>
                <h3 className='border-bottom fs-6 mb-5 pb-2'>Track Tickets</h3>
            </div>
            <div className='d-flex justify-content-between'>
                <div className='me-5'>
                    <h3>Search for an answer or browse help topics to create a <br></br> ticket</h3>
                    <form className='d-flex'>
                        <input type='text' className='support-search' placeholder='Eg: how do i activate F&), why is my order getting rejected ...'></input>
                        <div style={{position: "relative", right: "2.8rem",top: "3.2rem", color: "#424242"}} >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </form>
                    <div className='d-flex flex-wrap justify-content-between' style={{width: "34rem", marginBottom: "3rem"}}>
                        <h3 className='border-bottom fs-6 mb-3 pb-2'>Track account opening</h3>
                        <h3 className='border-bottom fs-6 mb-3 pb-2'>Track segment activation</h3>
                        <h3 className='border-bottom fs-6 mb-3 pb-2'> Intraday margins</h3>
                        <h3 className='border-bottom fs-6 mb-5 pb-2'>Kite user manual</h3>
                    </div>
                </div>
                <div className='pt-5 text-white'>
                    <h3 className='mb-4'>Featured</h3>
                    <ol>
                        <li className='mb-4'><a href='' className='text-white border-bottom'>Connectivity issue - Support telephone line</a></li>
                        <li><a href='' className='text-white border-bottom'>Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
        </div>
     );
}

export default Hero;