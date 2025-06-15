import React from 'react';
function NotFound() {
    return ( 
        <div className='container' style={{padding: "1rem"}}>
            <div className='row text-center mb-4 mt-5'>
                <h1 className='mt-5'>404 Not Found</h1>
                <p className='mt-3'>Sorry, the page you are looking for doesn't exist.</p>
            </div>
        </div>
     );
}

export default NotFound;