import React from 'react';
function RightSec({imgURL, productName, productDesc, learnMore}) {
    return ( 
        <div className='container'>
            <div className='d-flex justify-content-center align-items-center' style={{marginTop: "6rem"}}>
                <div style={{width: "21rem" }}>
                    <h1 className='mb-4'>{productName}</h1>
                    <p className='fw-medium text-muted' style={{lineHeight: "1.6"}}>{productDesc}</p>
                    <div className='d-flex fw-medium'>
                        <a href={learnMore}>Learn more &nbsp;<i class="fa-solid fa-right-long"></i></a>
                    </div>                
                </div>
                <div style={{width: "150px"}}></div>
                <div >
                    <img src={imgURL}  alt='...'></img>
                </div>
            </div>
        </div>
     );
}

export default RightSec;