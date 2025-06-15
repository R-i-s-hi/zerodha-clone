import React from 'react';
function Hero() {
    return ( 
        <div className='container text-center' style={{ marginTop: "10rem", color: "#424242" }}>
            <h1 className='fs-1 mb-3'>Technology</h1>
            <p className='fs-5 text-muted'>Sleek, modern, and intuitive trading platforms</p>
            <p style={{marginBottom: "7rem", fontSize: "16px", fontWeight: "450"}}>Check out our <a href=''>investment offerings &nbsp;<i class="fa-solid fa-right-long"></i></a></p>
            <hr></hr>
        </div>
     );
}

export default Hero;