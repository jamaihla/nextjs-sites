import Link from 'next/link'

export default function Nav() {
    return (
        <>
        <nav className="hidden lg:flex xl:mx-10">
                <ul className="flex pt-4">
                    <li className="font-raleway font-semibold mx-2 xl:mx-4 text-xs xl:text-base hover:text-gray-800 inline-block">
                        <Link href="/mgdb/car-parts">
                        <a>Car Parts</a>
                        </Link>    
                    </li>
                    <li className="font-raleway font-semibold mx-2 xl:mx-4 text-xs xl:text-base hover:text-gray-800 inline-block">
                        <Link href="/mgdb/about-us">
                        <a>About Us</a>    
                        </Link>
                    </li>
                    <li className="font-raleway font-semibold mx-2 xl:mx-4 text-xs xl:text-base hover:text-gray-800 inline-block">
                        <Link href="/mgdb/guides">
                        <a>Guides</a>    
                        </Link>
                    </li>
                    <li className="font-raleway font-semibold mx-2 xl:mx-4 text-xs xl:text-base hover:text-gray-800 inline-block">
                        <Link href="/mgdb/services">
                        <a>Services</a>    
                        </Link>
                    </li>
                    <li className="font-raleway font-semibold mx-2 xl:mx-4 text-xs xl:text-base hover:text-gray-800 inline-block">
                        <Link href="/mgdb/contact-us">
                        <a>Contact Us</a>    
                        </Link>
                    </li>
                    <li className="font-raleway font-semibold mx-2 xl:mx-4 text-xs xl:text-base hover:text-gray-800 inline-block">
                        <Link href="/mgdb/gallery">
                        <a>Gallery</a>    
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}