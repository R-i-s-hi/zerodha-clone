import React from 'react';
function LeftSec({imgURL, productName, productDesc, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container'>
            <div className='d-flex flex-lg-row gap-lg-5 flex-column align-items-center justify-content-center mt-lg-5 mt-4'>
                <img className='w-lg-50 w-75' src={imgURL}  alt='...'></img>
                <div className='w-lg-50 w-75' style={{paddingTop: "3.5rem"}}>
                    <h1 className='mb-4'>{productName}</h1>
                    <p className='fw-medium text-muted' style={{lineHeight: "1.6"}}>{productDesc}</p>
                    <div className='d-flex fw-medium'>
                        <a href={tryDemo} className='me-4 fw-medium'>Try demo &nbsp;<i class="fa-solid fa-right-long"></i></a>
                        <a href={learnMore}>Learn more &nbsp;<i class="fa-solid fa-right-long"></i></a>
                    </div>
                    <div className='d-flex mt-4'>
                        <a href={googlePlay} className='me-4'><img src='images/googlePlayBadge.svg'></img></a>
                        <a href={appStore}><img src='images/appstoreBadge.svg'></img></a>
                    </div>
                </div>
            </div>
        </div> 
     );
}

export default LeftSec;