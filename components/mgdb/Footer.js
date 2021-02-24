import styles from '../../styles/mgdb/MGDB.module.css'

export default function Footer () {
    return (
        <>
        <div>
            <img className="w-full" src="/mgdb/waveg.svg" alt="Wave" />
        </div>
        <div className="px-9 py-4 md:px-20 xl:px-64">
            <div className={[styles.subscribe, "relative z-10 -top-20 sm:-top-32 md:-top-36 lg:-top-44 xl:-top-56 2xl:-top-72 lg:px-20"].join(' ')}>
                <h1 className="font-roboto font-bold text-2xl sm:text-4xl text-darkblue text-center mb-2 sm:mb-4">Get the latest updates from us</h1>
                <p className="font-roboto text-center sm:text-xl mb-8 sm:mb-12">We'll send you some updates and special offers</p>
                <div className="flex justify-center pb-10 sm:hidden">
                <form className="w-full px-3" action="">
                    <input className={[styles.subscriptionForm, "w-full"].join(' ')} type="text" placeholder="Enter your email address" />
                    <div className="flex justify-center pt-6 sm:hidden">
                        <button type="button" className="font-roboto w-36 bg-brightorange text-white py-3 rounded-lg">Get Updates</button>
                    </div>    
                </form>
                </div>
                <div className={[styles.subscriptionForm, "hidden sm:flex"].join(' ')}>
                    <form className="w-full pl-3 flex items-center" action="">
                        <input className="w-full px-2" type="text" placeholder="Enter your email address" />
                        <div className="flex justify-center">
                            <button type="button" className="font-roboto w-36 bg-brightorange text-white py-3 rounded-lg">Get Updates</button>
                        </div>    
                    </form>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center sm:pt-6">
                    <p className="font-roboto text-sm sm:text-base text-center mr-2">Become a part of our ever growing community</p>
                    <p className="font-roboto font-bold text-sm sm:text-base  text-center text-brightorange">Join our Community</p>
                </div>
                
            </div>
        </div>
        <footer className="px-9 py-4 md:px-20 lg:mx-auto 2xl:px-36">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <div className="lg:mr-10 xl:mr-0 xl:w-1/4">
                    <img className="h-12 pb-2" src="/mgdb/MGDB.svg" alt="MGDB logo" />
                    <p className="font-roboto font-medium pb-2">Parts & Services</p>
                    <p className="font-roboto font-medium pb-2 xl:pb-28">Rover P6 Parts Specialist</p>
                    <address className="pb-10 xl:align-bottom">
                        <a className="font-roboto not-italic font-medium xl:pb-9 inline-block" href="#">sales@mgbdparts.co.uk</a><br />
                        <a className="font-roboto not-italic font-medium inline-block" href="#">+44 (0)1902 689975</a>
                    </address>
                    <div className="w-1/2 sm:w-1/3 lg:w-full pb-10 xl:w-2/4">
                        <nav className="">
                            <ul className="flex justify-between items-center">
                                <li className="twitter"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                    <path id="Path_19224" data-name="Path 19224" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0Zm5.707,9.746q.008.184.008.371a8.108,8.108,0,0,1-8.163,8.163h0a8.121,8.121,0,0,1-4.4-1.289,5.834,5.834,0,0,0,.684.04A5.757,5.757,0,0,0,9.9,15.8a2.872,2.872,0,0,1-2.68-1.993,2.858,2.858,0,0,0,1.3-.049,2.87,2.87,0,0,1-2.3-2.812c0-.013,0-.025,0-.037a2.85,2.85,0,0,0,1.3.359,2.871,2.871,0,0,1-.888-3.83,8.146,8.146,0,0,0,5.914,3,2.871,2.871,0,0,1,4.889-2.616,5.756,5.756,0,0,0,1.822-.7,2.88,2.88,0,0,1-1.262,1.587,5.722,5.722,0,0,0,1.648-.452A5.831,5.831,0,0,1,18.207,9.746Z" fill="#1f3075"/>
                                </svg></a>
                                </li>
                                <li className="facebook">
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path id="Path_19225" data-name="Path 19225" d="M25,12.5A12.5,12.5,0,1,0,12.5,25c.073,0,.146,0,.22,0V15.269H10.034v-3.13H12.72v-2.3a3.761,3.761,0,0,1,4.014-4.126,21.815,21.815,0,0,1,2.407.122V8.623H17.5c-1.294,0-1.548.615-1.548,1.519v1.992h3.1l-.405,3.13h-2.7v9.253A12.5,12.5,0,0,0,25,12.5Z" fill="#1f3075"/>
                                    </svg>
                                    </a>
                                </li>
                                <li className="instagram">
                                    <a href="#"><svg id="Group_738" data-name="Group 738" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path id="Path_19226" data-name="Path 19226" d="M211.977,209.488A2.488,2.488,0,1,1,209.488,207,2.488,2.488,0,0,1,211.977,209.488Z" transform="translate(-196.988 -196.988)" fill="#1f3075"/>
                                        <path id="Path_19227" data-name="Path 19227" d="M147.423,137.205a2.472,2.472,0,0,0-1.417-1.417,4.131,4.131,0,0,0-1.386-.257c-.787-.036-1.023-.044-3.017-.044s-2.229.008-3.017.043a4.134,4.134,0,0,0-1.386.257,2.473,2.473,0,0,0-1.417,1.417,4.132,4.132,0,0,0-.257,1.386c-.036.787-.044,1.023-.044,3.016s.008,2.229.044,3.017a4.13,4.13,0,0,0,.257,1.386,2.472,2.472,0,0,0,1.417,1.417,4.125,4.125,0,0,0,1.386.257c.787.036,1.023.043,3.016.043s2.23-.008,3.017-.043a4.125,4.125,0,0,0,1.386-.257,2.472,2.472,0,0,0,1.417-1.417,4.135,4.135,0,0,0,.257-1.386c.036-.787.043-1.023.043-3.017s-.008-2.229-.043-3.016A4.125,4.125,0,0,0,147.423,137.205Zm-5.819,8.236a3.833,3.833,0,1,1,3.833-3.833A3.833,3.833,0,0,1,141.6,145.441Zm3.985-6.922a.9.9,0,1,1,.9-.9A.9.9,0,0,1,145.589,138.519Z" transform="translate(-129.104 -129.108)" fill="#1f3075"/>
                                        <path id="Path_19228" data-name="Path 19228" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0Zm7.134,15.459A5.266,5.266,0,0,1,19.3,17.2a3.67,3.67,0,0,1-2.1,2.1,5.27,5.27,0,0,1-1.742.334c-.765.035-1.01.043-2.959.043s-2.194-.008-2.959-.043A5.27,5.27,0,0,1,7.8,19.3a3.67,3.67,0,0,1-2.1-2.1,5.265,5.265,0,0,1-.334-1.742c-.035-.766-.044-1.01-.044-2.959s.008-2.194.043-2.959A5.267,5.267,0,0,1,5.7,7.8,3.673,3.673,0,0,1,7.8,5.7a5.271,5.271,0,0,1,1.742-.334c.765-.035,1.01-.043,2.959-.043s2.194.008,2.959.044A5.272,5.272,0,0,1,17.2,5.7a3.671,3.671,0,0,1,2.1,2.1,5.266,5.266,0,0,1,.334,1.742c.035.765.043,1.01.043,2.959S19.67,14.694,19.634,15.459Z" fill="#1f3075"/>
                                    </svg>                      
                                    </a>
                                </li>
                                <li className="youtube">
                                    <a href="#"><svg id="Group_739" data-name="Group 739" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                        <path id="Path_19230" data-name="Path 19230" d="M224.113,212.91l4.229-2.436-4.229-2.436Z" transform="translate(-213.255 -197.975)" fill="#1f3075"/>
                                        <path id="Path_19231" data-name="Path 19231" d="M12.5,0A12.5,12.5,0,1,0,25,12.5,12.5,12.5,0,0,0,12.5,0Zm7.811,12.513a20.631,20.631,0,0,1-.322,3.757,1.957,1.957,0,0,1-1.377,1.377,47.509,47.509,0,0,1-6.112.322,45.807,45.807,0,0,1-6.112-.335,1.957,1.957,0,0,1-1.377-1.377A20.54,20.54,0,0,1,4.689,12.5a20.617,20.617,0,0,1,.322-3.757,2,2,0,0,1,1.377-1.39A47.509,47.509,0,0,1,12.5,7.031a45.71,45.71,0,0,1,6.112.335,1.957,1.957,0,0,1,1.377,1.377A19.577,19.577,0,0,1,20.311,12.513Z" fill="#1f3075"/>
                                    </svg>                                          
                                    </a>
                                </li>
                            </ul>                
                        </nav>
                    </div>
                </div>
                <div className="pt-10 lg:pt-0 flex flex-col sm:flex-row sm:justify-between xl:w-2/4">
                    <div className="py-5 lg:pt-0 lg:mr-8">
                        <nav className="">
                            <ul>
                                <li><a className="font-roboto font-bold text-darkblue text-xl" href="#">Remanufactured</a></li>
                                <li><a href="#">Road Springs</a></li>
                                <li><a href="#">Brake Discs</a></li>
                                <li><a href="#">Ball Joints</a></li>
                                <li><a href="#">Water Hoses</a></li>
                                <li><a href="#">Rubber Parts</a></li>
                                <li><a href="#">Gaskets & Fasteners</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="py-5 lg:pt-0 lg:mr-8">
                        <nav className="flex flex-col">
                            <ul>
                                <li><a className="font-roboto font-bold text-darkblue text-xl" href="#">Service Exchange</a></li>
                                <li><a className="font-roboto font-bold text-darkblue text-xl" href="#">Refurbished Parts</a></li>
                                <li><a href="#">Calipers</a></li>
                                <li><a href="#">Servo</a></li>
                                <li><a href="#">Water Pumps</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="py-5 lg:pt-0 lg:mr-8">
                        <nav className="flex flex-col">
                            <ul>
                                <li><a className="font-roboto font-bold text-darkblue text-xl" href="#">Machining</a></li>
                                <li><a className="font-roboto font-bold text-darkblue text-xl" href="#">Chroming</a></li>
                                <li><a className="font-roboto font-bold text-darkblue text-xl" href="#">Polishing</a></li>
                                <li><a className="font-roboto font-bold text-darkblue text-xl" href="#">Stainless Steel Parts</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="pt-10 lg:pt-0 lg:w-1/4">
                    <p className="font-roboto font-bold text-darkblue pb-10 text-center lg:text-left">MGDB Parts & Services is proud to be one 
                        of the sponsors of the Norfolk & Norwich 
                        Rover Owners Club.</p>
                    <p className="font-roboto font-bold text-darkblue pb-10 text-center lg:text-left">MGDB Parts & Services is celebrating
                        50 years of the Rover P6 2000 & 60 years of
                        the RSR.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center text-center xl:flex-row xl:justify-end xl:w-auto">
                <p className="font-roboto font-medium pb-2"><a href="#">&copy; 2021 MGDB Parts & Services</a></p>
                <p className="font-roboto font-medium pb-2 xl:mx-10"><a href="#">Privacy Policy</a></p>
                <p className="font-roboto font-medium pb-2"><a href="#">Terms & Conditions</a></p>
            </div>
        </footer>
        </>
    )
}