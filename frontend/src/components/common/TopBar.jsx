import React from 'react';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="container top-bar__content">
                <div className="top-bar__info">
                    <span>7631 Sabina Park, 115 Devon Isle, Louisiana, USA</span>
                    <span>info@domain.com</span>
                    <span>(+1) 987 654 3210</span>
                </div>
                <div className="top-bar__socials">
                    <a href="#" aria-label="Facebook">

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" fill='white'>    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" /></svg>
                    </a>
                    <a href="#" aria-label="Twitter" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" class="bi bi-twitter-x" viewBox="0 0 15 15" id="Twitter-X--Streamline-Bootstrap" height="20" width="20">
                            <desc>
                                Twitter X Streamline Icon: https://streamlinehq.com
                            </desc>
                            <path d="M11.8125 0.703125h2.300625l-5.025 5.758125000000001L15 14.296875h-4.6284375l-3.6253125 -4.753125000000001 -4.1484375 4.753125000000001H0.29625l5.374687499999999 -6.159375000000001L0 0.703125h4.7465625l3.2765625000000003 4.3434375L11.813437500000001 0.703125Zm-0.80625 12.213750000000001h1.2750000000000001L4.0528125 2.0109375H2.6859375z" stroke-width="0.9375"></path>
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram">
                        <svg width="30" height="30" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="16">
                            <rect x="24" y="24" width="208" height="208" rx="56" ry="56" />

                            <circle cx="128" cy="128" r="56" />

                            <circle cx="188" cy="68" r="16" fill="white" />
                        </svg>

                    </a>
                    <a href="#" aria-label="Behance">
                        <svg width="60" height="30" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="70" font-family="Arial, Helvetica, sans-serif"
                                font-size="80" font-weight="700" fill="white">Be</text>

                            <rect x="118" y="20" width="38" height="10" fill="white" />
                        </svg>

                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;


