import styles from '../../styles/mgdb/MGDB.module.css'

export default function Shop () {
    return (
        <>
        <div className="bg-offwhite px-9 py-4 md:px-20 2xl:px-36">
            <div className="xl:flex justify-between items-start">
                <div className="my-14">
                    <h1 className="font-roboto font-bold text-2xl sm:text-4xl text-center xl:text-left text-darkblue leading-7"><span>Check out our new items</span><br className="hidden xl:block" /><span> and special offers</span></h1>
                    <p className="font-roboto text-center xl:text-left sm:text-xl 2xl:text-2xl lg:text-sm py-4 xl:py-8"><span>Please note that all Refurbished, NOS and secondhand parts </span><br className="hidden xl:block" />
                        <span>are detailed as such, and therefore anything else listed is </span><br className="hidden xl:block" />
                        <span>a brand new manufactured item.</span></p>
                </div>
                <div className="hidden xl:flex my-14">
                    <img className="mx-1 sm:w-12" src="/mgdb/left-arrow.svg" alt="Left arrow" />
                    <img className="mx-1 sm:w-12" src="/mgdb/right-arrow.svg" alt="Right arrow" />
                </div>
            </div>
            
            <div className="flex sm:justify-between">
                <div className={[styles.card, "w-full sm:w-1/2 lg:w-1/3 mx-1"].join(' ')}>
                    <div className="flex justify-end">
                        <img className="w-7" src="/mgdb/wishlist.svg" alt="" />
                    </div>
                    <img className="mx-auto mb-5 sm:w-auto" src="/mgdb/shock-absorber.svg" alt="Shock Absorber" />
                    <div>
                        <p className="font-roboto font-medium text-darkblue text-2xl mb-2">Shock Absorber</p>
                        <p className="font-roboto text-darkblue"><span className="font-medium">Size: </span>30 x 20 mm</p>
                        <p className="font-roboto text-darkblue"><span className="font-medium">Weight: </span>1 kg</p>
                    </div>
                    <div className="flex mt-4 justify-between items-center">
                        <h3 className="font-roboto font-bold text-2xl text-darkblue">$ 65.00</h3>
                        <p className="font-roboto font-medium text-xl text-brightorange">Order Now</p>
                    </div>
                </div>
                {/*<!--Product Slider-->*/}
                <div className={[styles.card, "hidden sm:block sm:w-1/2 lg:w-1/3 mx-1"].join(' ')}>
                    <div className="flex justify-end">
                        <img className="w-7" src="/mgdb/wishlist.svg" alt="" />
                    </div>
                    <img className="mx-auto mb-5 sm:mb-7 sm:w-48" src="/mgdb/wheel-set.svg" alt="Wheel Set" />
                    <div>
                        <p className="font-roboto font-medium text-darkblue text-2xl mb-2">Rover P6 Wheel Set</p>
                        <p className="font-roboto text-darkblue"><span className="font-medium">Size: </span>100" x 10"</p>
                        <p className="font-roboto text-darkblue"><span className="font-medium">Weight: </span>10 kg</p>
                    </div>
                    <div className="flex mt-4 justify-between items-center">
                        <h3 className="font-roboto font-bold text-2xl text-darkblue">$ 250.00</h3>
                        <p className="font-roboto font-medium text-xl text-brightorange">Order Now</p>
                    </div>
                </div>
                {/*<!--Desktop mode-->*/}
                <div className={[styles.card, "hidden lg:block lg:w-1/3 mx-1"].join(' ')}>
                    <div className="flex justify-end">
                        <img className="w-7" src="/mgdb/wishlist.svg" alt="" />
                    </div>
                    <img className="mx-auto mb-5 lg:w-44" src="/mgdb/rover_engine.svg" alt="Rover Engine" />
                    <div>
                        <p className="font-roboto font-medium text-darkblue text-2xl mb-2">Rover P6 V200 Engine</p>
                        <p className="font-roboto text-darkblue"><span className="font-medium">Size: </span>L</p>
                        <p className="font-roboto text-darkblue"><span className="font-medium">Weight: </span>Over 9000</p>
                    </div>
                    <div className="flex mt-4 justify-between items-center">
                        <h3 className="font-roboto font-bold text-2xl text-darkblue">$ 1,650.00</h3>
                        <p className="font-roboto font-medium text-xl text-brightorange">Order Now</p>
                    </div>
                </div>
                {/*<!--end of Product Slider-->*/}
            </div>
            {/*<!--slider arrows-->*/}
            <div className="xl:hidden flex justify-center">
                <img className="mx-1 sm:w-12" src="/mgdb/left-arrow.svg" alt="Left Arrow" />
                <img className="mx-1 sm:w-12" src="/mgdb/right-arrow.svg" alt="Right Arrow" />      
            </div>
        </div>
        </>
    )
}