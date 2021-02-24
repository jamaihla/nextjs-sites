import Link from 'next/link'
import styles from '../../styles/mgdb/MGDB.module.css'

export default function FooterNav() {
    return (
        <>
        <div className="pt-10 lg:pt-0 flex flex-col sm:flex-row sm:justify-between xl:w-2/4">
                <div className="py-5 lg:pt-0 lg:mr-8">
                    <nav className={styles.navLinks}>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a className="font-roboto font-bold text-darkblue text-xl">Remanufactured</a>
                                </Link>
                            </li>    
                            <li>
                                <Link href="#">
                                    <a>Road Springs</a>
                                </Link>
                            </li>    
                            <li>
                                <Link href="#">
                                    <a>Brake Discs</a>
                                </Link>
                            </li>    
                            <li>
                                <Link href="#">
                                    <a>Ball Joints</a>
                                </Link>
                            </li>    
                            <li>
                                <Link href="#">
                                    <a>Water Hoses</a>
                                </Link>
                            </li>    
                            <li>
                                <Link href="#">
                                    <a>Rubber Parts</a>
                                </Link>
                            </li>    
                            <li>
                                <Link href="#">
                                    <a>Gaskets & Fasteners</a>
                                </Link>
                            </li>    
                        </ul>
                    </nav>
                </div>
                <div className="py-5 lg:pt-0 lg:mr-8">
                    <nav className={[styles.navLinks, "flex flex-col"].join(' ')}>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a className="font-roboto font-bold text-darkblue text-xl">Service Exchange</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a className="font-roboto font-bold text-darkblue text-xl">Refurbished Parts</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Calipers</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a >Servo</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    <a>Water Pumps</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="py-5 lg:pt-0 lg:mr-8">
                    <nav className={[styles.navLinks, "flex flex-col"].join(' ')}>
                        <ul>
                            <li>
                                <Link href="#">
                                    <a className="font-roboto font-bold text-darkblue text-xl">Machining</a>
                                </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <a className="font-roboto font-bold text-darkblue text-xl">Chroming</a>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <a className="font-roboto font-bold text-darkblue text-xl">Polishing</a>
                            </Link>
                            </li>
                            <li>
                            <Link href="#">
                                <a className="font-roboto font-bold text-darkblue text-xl">Stainless Steel Parts</a>
                            </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}