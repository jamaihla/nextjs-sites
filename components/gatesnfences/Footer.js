import Link from 'next/link'

const Footer = () => {
    return (
        <>
        <footer className="desktop:flex">
            <div className="mx-auto desktop:mx-0 px-9 xxl:px-35 py-10 tablet:w-3/4 xxl:w-1/4">
                <div>
                    <div className="flex justify-center desktop:hidden">
                        <img className="" src="/gatesnfences/gates-fences-mobile.svg" alt="gatesnfences footer logo"/>
                    </div>
                    <div className="hidden desktop:flex justify-center desktop:justify-start pt-24">
                        <img className="" src="/gatesnfences/gates-fences.svg" alt="gatesnfences footer logo"/>
                    </div>
                    <div className="py-10 tablet:w-1/2 tablet:mx-auto desktop:w-full">
                        <ul className="flex justify-between desktop:justify-start items-center w-1/2 desktop:w-full mx-auto">
                            <li className="desktop:mr-6">
                                <Link href="#">
                                    <a>
                                        <img src="/gatesnfences/facebook-icon.svg" alt="facebook-icon" />
                                    </a>
                                </Link>
                            </li>
                            <li className="desktop:mr-6">
                                <Link href="#">
                                    <a>
                                        <img src="/gatesnfences/instagram-icon.svg" alt="instagram-icon" />
                                    </a>
                                </Link>
                            </li>
                            <li className="desktop:mr-6">
                                <Link href="#">
                                    <a>
                                        <img src="/gatesnfences/twitter-icon.svg" alt="twitter-icon" />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-lightblack desktop:bg-footer-bg bg-cover mx-auto desktop:mx-0 px-9 xxl:px-35 py-10 xxl:w-3/4">
                <div className="desktop:flex desktop:justify-items-end">
                    <div className="mx-auto text-center desktop:mx-0">
                        <h3 className="font-main font-semibold text-2xl text-lightyellow py-4 desktop:text-right">L.A. Ornamental Corp</h3>
                        <div className="font-main font-semibold text-base text-alto tracking-widest desktop:text-right">
                        3708 N.W. 82nd Street <br />
                        Miami, Florida 33147 <br />
                        <span className="font-main font-semibold text-base text-center text-zomp tracking-widest desktop:text-right">LAOrnamental@Aol.com</span>
                        </div>
                        <div className="font-main font-semibold text-base text-center text-alto tracking-widest my-4 desktop:text-right">305-696-0419</div>
                    </div>
                    <div className="mx-auto text-center py-4 desktop:text-right">
                        <p className="text-base text-lightyellow">For your car care specialist in Miami Florida in Bird Road Area visit <br /><span className="text-sushi font-bold">www.rrautorepairs.com</span></p>
                    </div>
                </div>
                <div className="py-4">
                    <div className="text-center mb-5">
                        <p className="text-silverchalice text-base desktop:text-right">Copyright 2020 All Rights Reserved. Designed by Jamaihl Amoroso for AOV</p>
                    </div>
                    <div className="text-center">
                        <p className="text-silverchalice text-xs desktop:text-right">No part of this site can be reproduced in any form or by any means, electronic, mechanical, photocopying, or otherwise without prior written consent of L. A. Ornamental & Rack Corp. </p>
                    </div>
                </div>
            </div>
        </footer>    
        </>
    )
}

export default Footer