import React from 'react';
function CreateTicket() {
    return ( 
        <div className='container'>
            <h4 className='mt-5 mb-5 text-muted text-center'>To create a ticket, select a relevant topic</h4>
            <div className='d-flex flex-md-row flex-column justify-content-md-start jsutify-content-center gap-3 align-items-md-auto align-items-ceneter mb-5 ticket'>
                <div class="w-33 text-md-start text-center">
                    <span className="d-flex gap-2 align-items-center jsutify-content-md-start justify-content-center mb-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path d="M12.0672 2C9.6678 2 7.72266 3.94514 7.72266 6.34459C7.72266 8.74404 9.6678 10.6892 12.0672 10.6892C14.4667 10.6892 16.4118 8.74404 16.4118 6.34459C16.4118 3.94514 14.4667 2 12.0672 2Z" fill="#343C54"/>
                            <path d="M20.25 19.453C20.2421 19.8615 19.9087 20.1895 19.5001 20.1895H4.50013C4.09157 20.1895 3.75818 19.8624 3.75027 19.454L3.75023 19.452L3.75019 19.4493L3.7501 19.4423L3.75 19.4211C3.74999 19.404 3.75015 19.3807 3.75072 19.3516C3.75187 19.2937 3.75468 19.2127 3.76117 19.1119C3.77413 18.9107 3.80189 18.6292 3.86099 18.2937C3.97867 17.6258 4.22374 16.7262 4.73808 15.8194C5.79641 13.9537 7.92408 12.1895 12.0001 12.1895C16.0762 12.1895 18.2038 13.9537 19.2622 15.8194C19.7765 16.7262 20.0216 17.6258 20.1393 18.2937C20.1984 18.6292 20.2261 18.9107 20.2391 19.1119C20.2456 19.2127 20.2484 19.2937 20.2495 19.3516C20.2501 19.3807 20.2503 19.404 20.2503 19.4211L20.2502 19.4423L20.2501 19.4493L20.25 19.452L20.25 19.453Z" fill="#343C54"/>
                        </svg>
                        <h4 className='fs-5 mb-0 d-flex flex-column align-items-center'>
                            Account Opening
                        </h4>
                    </span>
                    
                    <ul class="list-unstyled fw-medium ps-2">
                        <li>Resident individual</li>
                        <li>Minor</li>
                        <li>Non Resident Indian (NRI)</li>
                        <li>Company, Partnership, HUF and LLP</li>
                        <li>Glossary</li>
                    </ul>
                </div>
                <div class="w-33 text-md-start text-center">
                    <span className="d-flex gap-2 align-items-center jsutify-content-md-start justify-content-center mb-3">
                        <svg width="25" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                            <path d="M12 1.75C12.4142 1.75 12.75 2.08579 12.75 2.5V3.78169C16.9842 4.14113 20.3589 7.51581 20.7183 11.75H22C22.4142 11.75 22.75 12.0858 22.75 12.5C22.75 12.9142 22.4142 13.25 22 13.25H20.7183C20.3589 17.4842 16.9842 20.8589 12.75 21.2183V22.5C12.75 22.9142 12.4142 23.25 12 23.25C11.5858 23.25 11.25 22.9142 11.25 22.5V21.2183C7.01581 20.8589 3.64113 17.4842 3.28169 13.25H2C1.58579 13.25 1.25 12.9142 1.25 12.5C1.25 12.0858 1.58579 11.75 2 11.75H3.28169C3.64113 7.51581 7.01581 4.14113 11.25 3.78169V2.5C11.25 2.08579 11.5858 1.75 12 1.75ZM12.0001 8.74414C11.1074 8.74414 10.3838 9.46777 10.3838 10.3604C10.3838 11.2531 11.1074 11.9767 12.0001 11.9767C12.8927 11.9767 13.6163 11.2531 13.6163 10.3604C13.6163 9.46777 12.8927 8.74414 12.0001 8.74414ZM8.54785 14.8253V15.7555C8.54785 16.1697 8.88364 16.5055 9.29785 16.5055H14.7029C15.1171 16.5055 15.4529 16.1697 15.4529 15.7555V14.8253C15.4529 13.5891 14.4508 12.5869 13.2145 12.5869H10.7862C9.55 12.5869 8.54785 13.5891 8.54785 14.8253Z" fill="#343C54"/>
                        </svg>
                        <h4 className='fs-5 mb-0'>Your Zerodha Account</h4>
                    </span>
                    <ul class="list-unstyled fw-medium ps-2">
                        <li>Your Profile</li>
                        <li>Account modification</li>
                        <li>Client Master Report (CMR) and Depository Participant (DP)</li>
                        <li>Nomination</li>
                        <li>Transfer and conversion of securities</li>
                    </ul>
                </div>
                <div class="w-33 text-md-start text-center">
                    <span className="d-flex gap-2 align-items-center jsutify-content-md-start justify-content-center mb-3">
                        <svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                        <path d="M17.8076 2.5C18.2218 2.5 18.5576 2.83579 18.5576 3.25V3.41898C19.3061 3.60815 19.8599 4.28601 19.8599 5.09323C19.8599 5.50744 19.5242 5.84323 19.1099 5.84323C18.6957 5.84323 18.3599 5.50744 18.3599 5.09323C18.3599 4.96796 18.2584 4.86641 18.1331 4.86641H17.7381C17.4714 4.86641 17.2553 5.08257 17.2553 5.34921C17.2553 5.55046 17.3801 5.7306 17.5686 5.80127L18.5734 6.17811C19.3473 6.46833 19.8599 7.20814 19.8599 8.03464C19.8599 8.89065 19.3175 9.61996 18.5576 9.89759V10.1337C18.5576 10.5479 18.2218 10.8837 17.8076 10.8837C17.3934 10.8837 17.0576 10.5479 17.0576 10.1337V9.96488C16.3092 9.7757 15.7553 9.09785 15.7553 8.29062C15.7553 7.87641 16.0911 7.54062 16.5053 7.54062C16.9195 7.54062 17.2553 7.87641 17.2553 8.29062C17.2553 8.41589 17.3568 8.51744 17.4821 8.51744H17.8771C18.1438 8.51744 18.3599 8.30129 18.3599 8.03464C18.3599 7.8334 18.2351 7.65326 18.0467 7.58259L17.0418 7.20575C16.268 6.91552 15.7553 6.17571 15.7553 5.34921C15.7553 4.49321 16.2977 3.7639 17.0576 3.48626V3.25C17.0576 2.83579 17.3934 2.5 17.8076 2.5Z" fill="#343C54"/>
                        <path d="M5.5 3.75045C4.25736 3.75045 3.25 4.75781 3.25 6.00045V19.0005C3.25 20.2431 4.25736 21.2505 5.5 21.2505H5.83333C7.07597 21.2505 8.08333 20.2431 8.08333 19.0005V6.00045C8.08333 4.75781 7.07598 3.75045 5.83333 3.75045H5.5Z" fill="#343C54"/>
                        <path d="M9.58301 12.3842C9.58301 11.1416 10.5904 10.1342 11.833 10.1342H12.1663C13.409 10.1342 14.4163 11.1416 14.4163 12.3842V19.0005C14.4163 20.2432 13.409 21.2505 12.1663 21.2505H11.833C10.5904 21.2505 9.58301 20.2432 9.58301 19.0005V12.3842Z" fill="#343C54"/>
                        <path d="M15.916 15.4223C15.916 14.1797 16.9234 13.1723 18.166 13.1723H18.4993C19.742 13.1723 20.7493 14.1797 20.7493 15.4223V19.0005C20.7493 20.2432 19.742 21.2505 18.4993 21.2505H18.166C16.9234 21.2505 15.916 20.2432 15.916 19.0005V15.4223Z" fill="#343C54"/>
                        </svg>
                        <h4 className='fs-5 mb-0'>Kite</h4>
                    </span>
                    <ul class="list-unstyled fw-medium ps-2">
                        <li>IPO</li>
                        <li>Trading FAQs</li>
                        <li>Margin Trading Facility (MTF) and Margins</li>
                        <li>Charts and orders</li>
                        <li>Alerts and Nudges</li>
                        <li>General</li>
                    </ul>
                </div>
            </div>
            <div className='d-flex flex-md-row flex-column justify-content-md-start jsutify-content-center gap-3 align-items-md-auto align-items-ceneter mb-5 ticket'>
                <div class="w-33 text-md-start text-center">
                    <span className="d-flex gap-2 align-items-center jsutify-content-md-start justify-content-center mb-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                        <path d="M20.75 8.51807C20.7744 8.50594 20.7986 8.49337 20.8225 8.48039C21.5239 8.09938 22 7.35627 22 6.50195V5.50195C22 4.25931 20.9926 3.25195 19.75 3.25195H4.25C3.00736 3.25195 2 4.25931 2 5.50195V6.50195C2 7.38538 2.50914 8.1499 3.25 8.51807C3.55124 8.66778 3.89079 8.75195 4.25 8.75195H19.75C20.1092 8.75195 20.4488 8.66778 20.75 8.51807Z" fill="#343C54"/>
                        <path d="M3.25 9.5952C3.56503 9.69697 3.9011 9.75195 4.25 9.75195H19.75C20.0989 9.75195 20.435 9.69697 20.75 9.5952V18.502C20.75 19.7446 19.7426 20.752 18.5 20.752H5.5C4.25736 20.752 3.25 19.7446 3.25 18.502V9.5952ZM9.25 13.252C9.25 13.6662 9.58579 14.002 10 14.002H14C14.4142 14.002 14.75 13.6662 14.75 13.252C14.75 12.8377 14.4142 12.502 14 12.502H10C9.58579 12.502 9.25 12.8377 9.25 13.252Z" fill="#343C54"/>
                        </svg>
                        <h4 className='fs-5 mb-0'>Funds</h4>
                    </span>
                    <ul class="list-unstyled fw-medium ps-2">
                        <li>Add money</li>
                        <li>Withdraw money</li>
                        <li>Add bank accounts</li>
                        <li>eMandates</li>
                    </ul>
                </div>
                <div class="w-33 text-md-start text-center">
                    <span className="d-flex gap-2 align-items-center jsutify-content-md-start justify-content-center mb-3">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                        <path d="M2 5.70117C2 4.45853 3.00736 3.45117 4.25 3.45117H19.75C20.9926 3.45117 22 4.45853 22 5.70117V11.9512H2V5.70117Z" fill="#343C54"/>
                        <path d="M2 13.4512V15.2868C2 16.5294 3.00736 17.5368 4.25 17.5368H9.75003V19.049H8.74997C8.33576 19.049 7.99997 19.3847 7.99997 19.799C7.99997 20.2132 8.33576 20.549 8.74997 20.549H15.25C15.6642 20.549 16 20.2132 16 19.799C16 19.3847 15.6642 19.049 15.25 19.049H14.25V17.5368H19.75C20.9926 17.5368 22 16.5294 22 15.2868V13.4512H2Z" fill="#343C54"/>
                        </svg>
                        <h4 className='fs-5 mb-0'>Console</h4>
                    </span>
                    <ul class="list-unstyled fw-medium ps-2">
                        <li>Portfolio</li>
                        <li>Corporate actions</li>
                        <li>Funds statement</li>
                        <li>Reports</li>
                        <li>Profile</li>
                        <li>Segments</li>
                    </ul>
                </div>
                <div class="w-33 text-md-start text-center">
                    <span className="d-flex gap-2 align-items-center jsutify-content-md-start justify-content-center mb-3">
                        <svg width="20" height="20" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(0 0 0)">
                        <path d="M2.25 12C2.25 6.47715 6.72715 2 12.25 2C17.7728 2 22.25 6.47715 22.25 12C22.25 17.5228 17.7728 22 12.25 22C6.72715 22 2.25 17.5228 2.25 12ZM13 7.375C13 6.96079 12.6642 6.625 12.25 6.625C11.8358 6.625 11.5 6.96079 11.5 7.375V7.845C10.498 8.07236 9.75 8.96845 9.75 10.0392V10.3043C9.75 11.2422 10.3318 12.0817 11.2099 12.411L12.7634 12.9936C13.0561 13.1034 13.25 13.3832 13.25 13.6959V13.9609C13.25 14.3752 12.9142 14.7109 12.5 14.7109H11.8126C11.5019 14.7109 11.25 14.4591 11.25 14.1483C11.25 13.7341 10.9142 13.3983 10.5 13.3983C10.0858 13.3983 9.75 13.7341 9.75 14.1483C9.75 15.1812 10.5092 16.0368 11.5 16.1874V16.625C11.5 17.0392 11.8358 17.375 12.25 17.375C12.6642 17.375 13 17.0392 13 16.625V16.1552C14.002 15.9278 14.75 15.0317 14.75 13.9609V13.6959C14.75 12.758 14.1682 11.9185 13.2901 11.5891L11.7366 11.0066C11.4439 10.8968 11.25 10.6169 11.25 10.3043V10.0392C11.25 9.62503 11.5858 9.28924 12 9.28924H12.6874C12.9981 9.28924 13.25 9.54113 13.25 9.85184C13.25 10.2661 13.5858 10.6018 14 10.6018C14.4142 10.6018 14.75 10.2661 14.75 9.85184C14.75 8.81897 13.9908 7.96341 13 7.81278V7.375Z" fill="#343C54"/>
                        </svg>

                        <h4 className='fs-5 mb-0'>Coin</h4>
                    </span>
                    <ul class="list-unstyled fw-medium ps-2">
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