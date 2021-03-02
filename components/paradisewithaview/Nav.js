import Link from 'next/Link'

export default function Nav() {
    return (
        <>
        <nav className="hidden desktop:block">
            <ul>
                <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base xxl:text-2xl">
                    <Link href="/paradisewithaview/find-a-hotel">
                        <a>Find A Hotel</a>
                    </Link>
                </li>
                <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base xxl:text-2xl">
                    <Link href="/paradisewithaview/amenities">
                        <a>Amenities</a>
                    </Link>
                </li>
                <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base xxl:text-2xl">
                    <Link href="/paradisewithaview/gallery">
                        <a>Gallery</a>
                    </Link>
                </li>
                <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base xxl:text-2xl">
                    <Link href="/paradisewithaview/housing">
                        <a>Housing</a>
                    </Link>
                </li>
                <li className="inline-block font-sofia font-medium text-2xl px-2 desktop:text-base xxl:text-2xl">
                    <Link href="/paradisewithaview/events">
                        <a>Events</a>
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}