import Link from 'next/Link'
import LogoHeader from './LogoHeader'
// import Image from 'next/image'

export default function Nav() {
    return (
        <nav className="flex justify-around xl:justify-between items-center">
            {/*Tailwind UI hamburger menu*/}
            <div className="-mr-2 flex items-center lg:hidden">
                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" id="main-menu" aria-haspopup="true">
                    <span className="sr-only">Open main menu</span>
                    {/*  Heroicon name: menu */}
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
            <ul className="hidden lg:w-1/3 xl:w-auto lg:flex">
                <li className="mr-8 lg:mr-3 xl:mr-4 2xl:mr-8 font-main text-base 2xl:text-2xl text-lightblack hover:text-cherry">
                    <Link href="/pennyjuice">
                        <a>Home</a>
                    </Link>    
                </li>
                <li className="mr-8 lg:mr-3 xl:mr-4 2xl:mr-8 font-main text-base 2xl:text-2xl text-lightblack hover:text-cherry">
                <Link href="/pennyjuice/about-us">
                    <a>About Us</a>
                </Link>  
                </li>
                <li className="mr-8 lg:mr-3 xl:mr-4 2xl:mr-8 font-main text-base 2xl:text-2xl text-lightblack hover:text-cherry">
                <Link href="/pennyjuice/our-products">
                    <a>Our Products</a>
                </Link> 
                </li>
                <li className="font-main text-base 2xl:text-2xl text-lightblack hover:text-cherry">
                <Link href="/pennyjuice/contact-us">
                    <a>Contact Us</a>
                </Link> 
                </li>
            </ul>
            <div className="w-1/3 xl:w-auto flex justify-center">
                    {/* <img className="lg:w-48 2xl:w-64" src="/pennyjuice/logo.svg" alt="Penny Juice" />*/}
                    <LogoHeader></LogoHeader>
            </div>
            <div className="flex justify-around lg:justify-between items-center">
                    <p className="hidden sm:hidden md:block font-main font-bold sm:text-xs 2xl:text-base text-cherry">FREE NATIONWIDE <br /> SHIPPING</p>
                    <p className="hidden sm:hidden md:block font-main font-semibold mx-5 sm:text-base xl:text-xl 2xl:text-4xl text-lightblack">563-386-1999</p>
                    <a href="#"><img className="pt-2 sm:p-0 sm:pt-1 lg:w-8 xl:w-12 lg:pt-0 lg:pr-2" src="/pennyjuice/shopping-icon.svg" width="40" height="40" alt="shopping icon" /></a>
            </div>
        </nav>
    )
}