import Link from 'next/link'

const Footer = () => {
    return (
        <>
        <footer className="bg-lightersalmon mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
            <div className="pt-10 desktop:flex desktop:justify-between">
                <div className="xxl:w-52">
                    <img className="pb-6" src="paradisewithaview/paradise-logo.svg" alt="" />
                    <h3 className="font-sofia text-lightblack text-xl font-semibold">Paradise with a view</h3>
                    <p className="font-sofia text-lightblack tablet:text-base">Distinctive Vacation Rentals and
                        Exclusive Housing</p>
                </div>
                <nav className="py-8 desktop:py-0">
                    <ul>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium">
                            <Link href="/paradisewithaview/find-a-hotel">
                                <a>Find a Hotel</a>
                            </Link>
                        </li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium">
                            <Link href="/paradisewithaview/amenities">
                                <a>Amenities</a>
                            </Link>
                        </li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium">
                            <Link href="/paradisewithaview/gallery">
                                <a>Gallery</a>
                            </Link>
                        </li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium">
                            <Link href="/paradisewithaview/housing">
                                <a>Housing</a>
                            </Link>
                        </li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium">
                            <Link href="/paradisewithaview/events">
                                <a>Events</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="pb-5">
                    <h3 className="font-sofia text-lightblack text-xl font-semibold py-5 desktop:pt-0">Our Featured Hotels</h3>
                    <ul>
                        <li className="font-sofia text-lightblack text-sm font-medium">The Royal Garden Hotel and Spa</li>
                        <li className="font-sofia text-lightblack text-sm font-medium">The Pacific Monarch Hotel Waikiki</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-sofia text-lightblack text-xl font-semibold py-5 desktop:pt-0">Contact Us</h3>
                    <address className="font-sofia text-lightblack text-sm font-medium not-italic">
                        ParadiseWithAView.com <br />
                        c/o Investec, Inc. 1777 Ala Moana Blvd., <br />
                        Suite 116-84, Honolulu, HI 96815
                    </address>
                    <div className="pt-12">
                        <ul className="desktop:flex desktop:justify-between">
                            <li className="inline-block align-middle">
                                <Link href="#">
                                    <a><img src="/paradisewithaview/facebook.svg" alt="facebook" /></a>
                                </Link>
                            </li>
                            <li className="inline-block align-middle">
                                <Link href="#">
                                    <a><img src="/paradisewithaview/instagram.svg" alt="instagram" /></a>
                                </Link>
                            </li>
                            <li className="inline-block align-middle">
                                <Link href="#">
                                    <a><img src="/paradisewithaview/twitter.svg" alt="twitter" /></a>
                                </Link>
                            </li>
                            <li className="inline-block align-middle pt-1">
                                <Link href="#">
                                    <a><img src="/paradisewithaview/youtube.svg" alt="youtube" /></a>
                                </Link>
                            </li>
                            <li className="inline-block align-middle">
                                <Link href="#">
                                    <a><img src="/paradisewithaview/pinterest.svg" alt="pinterest" /></a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="py-5 desktop:flex desktop:justify-between desktop:w-1/2">
                <p className="font-sofia text-lightblack text-sm">2021 Paradisewithaview.com</p>
                <p className="font-sofia text-lightblack text-sm">Privacy Policy</p>
                <p className="font-sofia text-lightblack text-sm">Terms and Conditions</p>
            </div>
        </footer>
        </>
    )
}

export default Footer