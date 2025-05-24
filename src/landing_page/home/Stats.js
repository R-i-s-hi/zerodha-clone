import React from 'react';

function Stats() {
    return ( 
        <div className='container mb-5 mt-5' style={{color: "#424242"}}>
            <div className='row px-5'>
                <div className='col-lg-6 col-sm-12'>
                    <h1 className='mb-5'>Trust with confidence</h1>
                    <div style={{width: "70%"}}>
                        <div className='mb-4'>
                            <h4 className='mt-1'>Customer-first always</h4>
                            <p className='text-muted fw-medium' style={{fontSize: "14px"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                        </div>
                        <div className='mb-4'>
                            <h4>No spam or gimmicks</h4>
                            <p className='text-muted fw-medium' style={{fontSize: "14px"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                        </div>
                        <div className='mb-4'>
                            <h4>The Zerodha universe</h4>
                            <p className='text-muted fw-medium' style={{fontSize: "14px"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                        </div>
                        <div>
                            <h4>Do better with money</h4>
                            <p className='text-muted fw-medium' style={{fontSize: "14px"}}>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 ps-3 col-sm-12'>
                    <img src='images/ecosystem.png' alt='ecosystem' style={{width: "95%"}}></img>
                    <div className='text-center mt-1'>
                        <a href='' className='me-4' style={{textDecoration: "none"}}>Explore our products &nbsp;<i class="fa-solid fa-right-long"></i></a>
                        <a href='' style={{textDecoration: "none"}}>Try Kite demo &nbsp;<i class="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;