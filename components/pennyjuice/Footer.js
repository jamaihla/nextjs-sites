import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
        <footer className="pt-8 px-10 xl:px-36 xl:pt-28 mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-start items-center lg:items-start">
            <div className="w-full sm:w-72 lg:w-3/12">
            <Link href="/pennyjuice">
                <a>
                <Image 
                    className="lg:w-4/6 mb-6"
                    src="/pennyjuice/logo.svg"
                    alt="Penny Juice"
                    width={295}
                    height={65}
                />
                </a>
            </Link>
                {/*<img className="lg:w-4/6 mb-6" src="/pennyjuice/logo.svg" alt="" />*/}
                <p className="font-main text-lightblack text-base text-center lg:text-left leading-normal"><span>100% blended fruit juice concentrate</span> <br/> <span>specifically designed for childcare</span> <br/> <span>centers.</span></p>
            </div>
            <nav className="hidden lg:block justify-center text-center lg:text-left lg:w-3/12 mt-14 lg:mt-1">
                <ul>
                    <li className="font-main font-semibold text-base text-lightblack mb-6">
                        <Link href="/pennyjuice">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="font-main text-base text-lightblack mb-6">
                        <Link href="/pennyjuice/about-us">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li className="font-main text-base text-lightblack mb-6">
                        <Link href="/pennyjuice/our-products">
                            <a>Our Products</a>
                        </Link>                    
                    </li>
                    <li className="font-main text-base text-lightblack mb-6">
                        <Link href="/pennyjuice/contact-us">
                            <a>Contact Us</a>
                        </Link> 
                    </li>
                </ul>
            </nav>
            <div className="w-36 sm:w-72 flex flex-col lg:w-3/12 mt-10 lg:mt-1 justify-around lg:justify-items-stretch items-center lg:items-start">
                <p className="hidden lg:block font-main font-semibold text-base text-lightblack mb-9">Follow us</p>
                <div className="w-full lg:w-48 flex justify-between lg:justify-between items-center lg:items-start">
                    <div className="w-6 sm:w-12 lg:w-6"><a href="#"><img src="/pennyjuice/001-facebook.svg" alt="" /></a></div>
                    <div className="w-6 sm:w-12 lg:w-6"><a href="#"><img src="/pennyjuice/003-twitter.svg" alt="" /></a></div>
                    <div className="w-6 sm:w-12 lg:w-6"><a href="#"><img src="/pennyjuice/002-instagram.svg" alt="" /></a></div>
                </div>
            </div>
            <div className="flex flex-col lg:w-3/12 lg:mt-1 items-center lg:items-start">
                <p className="hidden lg:block font-main font-semibold text-lightblack lg:justify-start">Contact Us</p>
                <div className="mt-8 pb-8 text-center lg:text-left">
                    <p className="font-main font-semibold text-lightblack">Penny Juice of America</p>
                    <p>915 40th Ave Bettendorf, IA 52722</p>
                    <p>pennyjuice@hotmail.com</p>
                    <p>Phone: <span className="font-semibold">563-386-1999</span></p>
                    <p>Fax: <span className="font-semibold">563-386-6200</span></p>
                </div>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:w-full border-t border-lightcherry py-4 lg:justify-between">
            <p className="font-main text-lightblack text-center py-4 text-opacity-75">&copy; 2021 Penny Juice. All Rights Reserved.</p>
            <p className="font-main text-lightblack text-center py-4 text-opacity-75">Made by Jamaihl Amoroso for AoV</p>
        </div>
        </footer>
        </>
    )
}