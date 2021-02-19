import Image from 'next/image'
import Wave from './Wave'

export default function Main() {
    return (
        <>
            <div className="w-screen sm:w-full lg:max-w-full xl:px-36 h-full mx-auto">
                <main className="flex flex-col lg:flex-row items-center lg:px-10 xl:px-0 relative z-20">
                    <div className="lg:w-1/3">
                        <h1 className="font-main font-extrabold text-4.5xl sm:text-6xl 2xl:text-7.5xl text-center lg:text-left leading-none text-cherry pt-9 pb-1 sm:pb-2">100% BLENDED</h1>
                        <h3 className="font-main font-semibold text-2xl sm:text-3.5xl lg:text-2xl 2xl:text-4xl text-center lg:text-left leading-tight">Fruit Juice Concentrate <br className="lg:hidden" /><span>Specifically Designed For </span><br className="lg:hidden" /><span>Childcare Centers</span></h3>
                    </div>
                    <div className="w-48 sm:w-96 lg:w-1/3 lg:mt-12 flex justify-center">
                        
                        {/*<img className="w-96" src="img/juice.png" alt="Juice Splash image" /> */}
                        <div className="w-96">
                            <Image 
                                src="/pennyjuice/juice.png"
                                width={479}
                                height={886}
                                quality={100}
                            />
                        </div>
                    </div>
                    <div className="text-center lg:w-1/3">
                        <h1 className="font-main font-extrabold text-7xl 2xl:text-max text-center lg:text-right leading-none text-lime lg:mt-6">LEADER</h1>
                        <h1 className="font-main font-extrabold text-3.5xl 2xl:text-5.5xl text-center lg:text-right leading-none text-lightblack">in Childhood Juice!</h1>
                        <div className="mt-5 lg:mt-10 lg:text-right">
                            <button className="sm:w-full lg:w-auto bg-cherry hover:bg-lime text-white text-base sm:text-2xl lg:text-3xl py-2 sm:py-6 lg:py-5 px-5 rounded-full font-main font-extrabold">ORDER NOW!</button>
                        </div>
                    </div>
                </main>
            </div>
            <Wave />
            <div className="bg-fruits bg-cover pb-32 lg:py-48 relative z-0 lg:flex lg:justify-end lg:px-10">
                <div className="px-10 lg:px-0 xl:px-20 2xl:px-28 lg:w-1/2">
                    <div className="pt-40 lg:pt-24">
                        <h1 className="font-main font-extrabold text-5xl 2xl:text-7xl text-center lg:text-right text-lightcherry leading-tight">RAINBOWS of exciting flavors!</h1>
                    </div>
                    <div className="pt-10">
                        <p className="font-main font-semibold text-base 2xl:text-2xl text-center lg:text-right text-lightcherry leading-6">15 flavors available including 7 color free flavors. 
                        </p>
                        <p className="font-main font-semibold text-base 2xl:text-2xl text-center lg:text-right text-lightcherry leading-6">  Each case contains 6 - ½ gallon bottles of your choice. </p>
                        <p className="font-main font-semibold text-base text-center 2xl:text-2xl lg:text-right text-lightcherry leading-6">We’ve designed them especially for childcare, daycare, 
                            preschool, basp and extended daycare. </p>
                        <p className="font-main font-semibold text-base text-center 2xl:text-2xl lg:text-right text-lightcherry leading-6"> Get in touch with us today!</p>
                    </div>
                    <div className="pt-14 flex justify-center lg:justify-end">
                        <button className="bg-transparent hover:bg-cherry text-lightcherry font-main font-semibold hover:text-white border border-lightcherry hover:border-transparent rounded-full text-xl 2xl:text-4xl px-4 py-1 2xl:px-6 2xl:py-2">Learn More</button>
                    </div>
                </div>
            </div>
            <div className="h-mobile lg:h-desktop xl:h-wide 2xl:h-widescreen">
                <div className="bg-cover bg-drinks-xs sm:bg-drinks-sm md:bg-drinks-md lg:bg-drinks-lg 2xl:bg-drinks h-full">
                    <div className="px-10 pt-14 xl:pt-24">
                        <h1 className="font-main text-4xl lg:text-5xl 2xl:text-7xl font-extrabold text-center text-darkgreen uppercase">Healthy Juice Concentrates</h1>
                        <h1 className="font-main text-3xl lg:text-4xl 2xl:text-7xl font-extrabold text-center text-lightblack 2xl:pt-10">for all kids to enjoy</h1>
                    </div>
                    <div className="px-10 pt-14">
                        <p className="font-main text-base font-semibold text-lightblack text-center 2xl:text-2xl">We provide a variety of flavors that all kids can enjoy!</p> 
                        <p className="font-main text-base font-semibold text-lightblack text-center 2xl:text-2xl">All the juice concentrates that we sell are compliant with the USDA and FDA guidelines. </p>
                        <p className="font-main text-base font-semibold text-lightblack text-center 2xl:text-2xl">You don't need to refrigerate the concentrates before or after opening them.</p>
                    </div>
                    <div className="flex justify-center pt-14">
                        <button className="bg-cherry hover:bg-darkgreen text-lightcherry font-main font-semibold hover:text-white text-xl lg:text-2xl 2xl:text-4xl rounded-full px-4 py-1 2xl:px-6 2xl:py-2">Learn More</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:pt-24 xl:pt-32 lg:px-10 xl:px-36">
                <div className="px-10 lg:px-0 pt-14 xl:pt-0 lg:w-7/12 xl:w-7/12">
                    <h1 className="font-main font-bold text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-cherry text-center lg:text-left">Penny Juice Products</h1>
                    <h3 className="font-main font-semibold text-xl lg:text-2xl 2xl:text-4xl text-lightblack text-center lg:text-left xl:w-11/12 2xl:pt-4">comply with all requirements for CACFP, Subsidy, and Nutrition set forth by the FDA.</h3>
                    <p className="font-main font-semibold lg:text-sm xl:text-base 2xl:text-2xl text-lightblack leading-snug text-center lg:text-left pt-10">If you're running a childcare center and want to serve healthy beverages to kids every day, order quality juice concentrates from Penny Juice of America.</p>
                    <p className="font-main font-semibold lg:text-sm xl:text-base 2xl:text-2xl text-lightblack leading-snug text-center lg:text-left pb-4 pt-4">Our system is fast and easy to use. Penny Juice greatly reduces storage and handling requirements. 1 gallon pre-measured mix pitchers available to assure cost control and flavor consistency</p>
                    <div className="flex justify-center lg:justify-start pb-10 xl:pt-10">
                        <button className="bg-darkgreen hover:bg-cherry text-lightcherry font-main font-semibold hover:text-white text-xl lg:text-2xl 2xl:text-4xl rounded-full px-4 py-1 2xl:px-6 2xl:py-2">Learn More</button>
                    </div>
                </div>
                <div className="flex lg:w-5/12 xl:5/12 justify-center lg:justify-end">
                    <img className="w-48 lg:w-full xl:w-full" src="/pennyjuice/child.jpg" alt="" />
                </div>
            </div>
                
        </>
    )
}