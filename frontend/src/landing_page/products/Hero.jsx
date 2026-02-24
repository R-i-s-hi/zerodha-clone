import React from 'react';
function Hero() {
    return ( 
        <div className='container topContainer text-center' style={{color: "#424242" }}>
            <h1 className='mb-3'>Technology</h1>
            <p className='text-muted'>Sleek, modern, and intuitive trading platforms</p>
            <p className='mb-lg-5 mb-4' style={{fontSize: "16px", fontWeight: "450"}}>Check out our <a href='/'>investment offerings &nbsp;<i class="fa-solid fa-right-long"></i></a></p>
            <hr></hr>
        </div>
     );
}

export default Hero;