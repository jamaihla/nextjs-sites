import FooterNav from './FooterNav'
import SocialMediaIcons from './SocialMediaIcons'

export default function Footer () {
    return (
        <>
        <footer className="px-9 py-4 md:px-20 lg:mx-auto 2xl:px-36">
            <div className="flex flex-col lg:flex-row lg:justify-between">
                <SocialMediaIcons />
                <FooterNav />
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