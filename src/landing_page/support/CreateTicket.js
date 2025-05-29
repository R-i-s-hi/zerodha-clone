import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container' style={{paddingLeft: "4rem"}}>
             <h4 className='mt-5 mb-5 text-muted'>To create a ticket, select a relevant topic</h4>
             <div className='row mb-5 ticket'>
                <div className='col'>
                    <h4 className='fs-5'><i class="fa-solid fa-circle-plus me-2"></i>Account Opening</h4>
                    <ul>
                        <li>Resident individual</li>
                        <li>Minor</li>
                        <li>Non Resident Indian (NRI)</li>
                        <li>Company, Partnership, HUF and LLP</li>
                        <li>Glossary</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='fs-5'><i class="fa-regular fa-user me-2"></i>Your Zerodha Account</h4>
                    <ul>
                        <li>Your Profile</li>
                        <li>Account modification</li>
                        <li>Client Master Report (CMR) and Depository Participant (DP)</li>
                        <li>Nomination</li>
                        <li>Transfer and conversion of securities</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='fs-5'><i class="fa-solid fa-chart-simple me-2"></i>Kite</h4>
                    <ul>
                        <li>IPO</li>
                        <li>Trading FAQs</li>
                        <li>Margin Trading Facility (MTF) and Margins</li>
                        <li>Charts and orders</li>
                        <li>Alerts and Nudges</li>
                        <li>General</li>
                    </ul>
                </div>
             </div>
             <div className='row ticket mb-5'>
                <div className='col'>
                    <h4 className='fs-5'><i class="fa-solid fa-box-archive me-2"></i>Funds</h4>
                    <ul>
                        <li>Add money</li>
                        <li>Withdraw money</li>
                        <li>Add bank accounts</li>
                        <li>eMandates</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='fs-5'><i class="fa-solid fa-circle-notch me-2"></i>Console</h4>
                    <ul>
                        <li>Portfolio</li>
                        <li>Corporate actions</li>
                        <li>Funds statement</li>
                        <li>Reports</li>
                        <li>Profile</li>
                        <li>Segments</li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='fs-5'><i class="fa-solid fa-coins me-2"></i>Coin</h4>
                    <ul>
                        <li>Understanding mutual funds and Coin</li>
                        <li>Coin app</li>
                        <li>Coin web</li>
                        <li>Transactions and reports</li>
                        <li>National Pension Scheme (NPS)</li>
                    </ul>
                </div>
             </div>
        </div>
     );
}

export default CreateTicket;