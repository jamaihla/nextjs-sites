
const Footer = () => {
    return (
        <>
        <footer className="bg-lightersalmon mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
            <div className="pt-10 desktop:flex desktop:justify-between">
                <div className="2xl:w-52">
                    <img className="pb-6" src="paradisewithaview/paradise-logo.svg" alt="" />
                    <h3 className="font-sofia text-lightblack text-xl font-semibold">Paradise with a view</h3>
                    <p className="font-sofia text-lightblack tablet:text-base">Distinctive Vacation Rentals and
                        Exclusive Housing</p>
                </div>
                <nav className="py-8 desktop:py-0">
                    <ul>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium"><a href="#">Find a Hotel</a></li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium"><a href="#">Amenities</a></li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium"><a href="#">Gallery</a></li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium"><a href="#">Housing</a></li>
                        <li className="py-1 block font-sofia text-lightblack text-sm font-medium"><a href="#">Events</a></li>
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
                            <li className="inline-block align-middle"><a href="#"><img src="/paradisewithaview/facebook.svg" alt="facebook" /></a></li>
                            <li className="inline-block align-middle"><a href="#"><img src="/paradisewithaview/instagram.svg" alt="instagram" /></a></li>
                            <li className="inline-block align-middle"><a href="#"><img src="/paradisewithaview/twitter.svg" alt="twitter" /></a></li>
                            <li className="inline-block align-middle pt-1"><a href="#"><img src="/paradisewithaview/youtube.svg" alt="youtube" /></a></li>
                            <li className="inline-block align-middle"><a href="#"><img src="/paradisewithaview/pinterest.svg" alt="pinterest" /></a></li>
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