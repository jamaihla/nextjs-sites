import Link from 'next/link'
import TwitterIcon from './TwitterIcon'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import YoutubeIcon from './YoutubeIcon'

export default function SocialMediaIcons() {
    return (
        <>
        <div className="lg:mr-10 xl:mr-0 xl:w-1/4">
            <img className="h-12 pb-2" src="/mgdb/MGDB.svg" alt="MGDB logo" />
            <p className="font-roboto font-medium pb-2">Parts & Services</p>
            <p className="font-roboto font-medium pb-2 xl:pb-28">Rover P6 Parts Specialist</p>
            <address className="pb-10 xl:align-bottom">
                <Link href="#">
                    <a className="font-roboto not-italic font-medium xl:pb-9 inline-block" >sales@mgbdparts.co.uk</a>
                </Link>
                <br />
                <Link href="#">
                    <a className="font-roboto not-italic font-medium inline-block" href="#">+44 (0)1902 689975</a>
                </Link>
            </address>
            <div className="w-1/2 sm:w-1/3 lg:w-full pb-10 xl:w-2/4">
                <nav className="">
                    <ul className="flex justify-between items-center">
                        <li className="twitter">
                            <Link href="#">
                                <a>
                                <TwitterIcon />                   
                                </a>
                            </Link>
                        </li>
                        <li className="facebook">
                            <Link href="#">
                                <a>
                                <FacebookIcon />
                                </a>
                            </Link>
                            
                        </li>
                        <li className="instagram">
                            <Link href="#">
                            <a>
                            <InstagramIcon />
                            </a>
                            </Link>
                        </li>
                        <li className="youtube">
                            <Link href="#">
                                <a>
                                <YoutubeIcon />
                                </a>
                            </Link>
                            <a href="#">                                       
                            </a>
                        </li>
                    </ul>                
                </nav>
            </div>
        </div>        
        </>
    )
}