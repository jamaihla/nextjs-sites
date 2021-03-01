import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'

const Header = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://use.typekit.net/lwl4jbc.css"></link>
                <title>Paradise with a View</title>
            </Head>
            <header className="tablet:bg-lightersalmon mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
                <div className="flex justify-between items-center pb-14">
                    <button className="desktop:hidden">
                        <Image src="/paradisewithaview/menu.svg" width={25} height={20} alt="" />
                    </button>
                    <Link href="/paradisewithaview">
                        <a><img src="/paradisewithaview/paradise-logo.svg" alt="paradise logo" /></a>
                    </Link>
                    <nav className="hidden desktop:block">
                        <ul>
                            <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base 2xl:text-2xl">
                                <Link href="/paradisewithaview/find-a-hotel">
                                    <a>Find A Hotel</a>
                                </Link>
                            </li>
                            <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base 2xl:text-2xl">
                                <Link href="/paradisewithaview/amenities">
                                    <a>Amenities</a>
                                </Link>
                            </li>
                            <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base 2xl:text-2xl">
                                <Link href="/paradisewithaview/gallery">
                                    <a>Gallery</a>
                                </Link>
                            </li>
                            <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base 2xl:text-2xl">
                                <Link href="/paradisewithaview/housing">
                                    <a>Housing</a>
                                </Link>
                            </li>
                            <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base 2xl:text-2xl">
                                <Link href="/paradisewithaview/events">
                                    <a>Events</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button className="hidden tablet:flex py-2 px-5 bg-redviolet text-white rounded-md justify-between items-center">
                        <img className="pr-2 align-middle" src="/paradisewithaview/book.svg" alt="book icon" />
                        <span className="font-sofia text-xl align-middle">Bookings</span>
                    </button>
                    <button className="tablet:hidden">
                        <img src="/paradisewithaview/book-mobile.svg" alt="book mobile icon" />
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header