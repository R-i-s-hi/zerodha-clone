import React from 'react';
import {Link} from "react-router-dom"

function Hero() {
    return ( 
        <div className='container homeContainer topContainer'>
            <div className='flex-column text-center'>
                <img src='images/homeHero.png' alt='hero-image' style={{height: "80%" , width: "80%"}}></img>
                <h1 className='mt-5 fs-2 fw-semibold'>Invest in everything</h1>
                <p className='text-muted fw-medium'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='btn btn-primary fs-6 fw-medium homeBtn' style={{padding: "0.5rem 3rem"}}> 
                    <Link className="nav-link" to="/signup">
                    Signup for free
                  </Link>
                </button>
            </div>
        </div>
     );
}

export default Hero;