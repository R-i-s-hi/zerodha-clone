import React from 'react';
function RightSec({imgURL, productName, productDesc, learnMore}) {
    return ( 
        <div className='container'>
           <div className="d-flex flex-lg-row gap-lg-5 flex-column-reverse align-items-center justify-content-center mt-lg-5 mt-4">
                <div className='w-lg-50 w-75' style={{paddingTop: "3.5rem"}} >
                    <h1 className='mb-4'>{productName}</h1>
                    <p className='fw-medium text-muted' style={{lineHeight: "1.6"}}>{productDesc}</p>
                    <div className='d-flex fw-medium'>
                        <a href={learnMore}>Learn more &nbsp;<i class="fa-solid fa-right-long"></i></a>
                    </div>                
                </div>
                <img className='w-lg-50 w-75' src={imgURL}  alt='...'></img>
            </div>
        </div>
     );
}

export default RightSec;