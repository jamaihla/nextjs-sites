import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="mx-auto px-9 py-10">
                <div>
                    <div className="flex justify-center">
                        <img className="" src="/gatesnfences/gates-fences-mobile.svg" alt="gatesnfences footer logo"/>
                    </div>
                    <div className="mx-auto px-9 py-10">
                        <ul className="flex justify-between">
                            <li>
                                <Link href="#">
                                    <a>
                                        <img src="/gatesnfences/facebook-icon.svg" alt="facebook-icon" />
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>
                                        <img src="/gatesnfences/instagram-icon.svg" alt="instagram-icon" />
                                    </a>
                                </Link>
                            </li>
                            <li>
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
            <div className="bg-lightblack mx-auto px-9 py-10">
                <div>
                    <div className="mx-auto text-center">
                        <h3 className="font-main font-semibold text-2xl text-lightyellow py-4">L.A. Ornamental Corp</h3>
                        <div className="font-main font-semibold text-base text-alto tracking-widest">
                        3708 N.W. 82nd Street <br />
                        Miami, Florida 33147 <br />
                        <span className="font-main font-semibold text-base text-center text-zomp tracking-widest">LAOrnamental@Aol.com</span>
                        </div>
                        <div className="font-main font-semibold text-base text-center text-alto tracking-widest my-4">305-696-0419</div>
                    </div>
                    <div className="mx-auto text-center py-4">
                        <p className="text-base text-lightyellow">For your car care specialist in Miami Florida in Bird Road Area visit <br /><span className="text-sushi font-bold">www.rrautorepairs.com</span></p>
                    </div>
                </div>
                <div className="py-4">
                    <div className="text-center mb-5">
                        <p className="text-silverchalice text-base">Copyright 2020 All Rights Reserved. Designed by Jamaihl Amoroso for AOV</p>
                    </div>
                    <div className="text-center">
                        <p className="text-silverchalice text-xs">No part of this site can be reproduced in any form or by any means, electronic, mechanical, photocopying, or otherwise without prior written consent of L. A. Ornamental & Rack Corp. </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer