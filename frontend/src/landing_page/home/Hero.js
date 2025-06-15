import React from 'react';
import {Link} from "react-router-dom"

function Hero() {
    return ( 
        <div className='container' style={{padding: "1rem", marginTop: "3rem"}}>
            <div className='flex-column text-center mb-5'>
                <img src='images/homeHero.png' alt='hero-image' style={{height: "85%" , width: "85%"}}></img>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 fw-medium' style={{width: "20%", margin: "0 auto"}}> 
                    <Link className="nav-link" to="/signup">
                    Signup for free
                  </Link>
                </button>
            </div>
        </div>
     );
}

export default Hero;