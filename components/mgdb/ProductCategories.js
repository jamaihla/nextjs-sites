import styles from '../../styles/mgdb/MGDB.module.css'

export default function ProductCategories() {
    return (
        <>
        {/*<!--Product Categories-->*/}
        <div className="px-9 md:px-20 py-8 bg-lightgray h-full 2xl:px-36">
            <div className="lg:flex lg:justify-between">
                <div className={[styles.card, "flex lg:mr-2 w-full"].join(' ')}>
                    <div className="w-1/2">
                    <h1 className="font-roboto font-bold text-2xl sm:text-4xl lg:text-3xl  2xl:text-5xl text-darkblue mb-5">Suspensions</h1>
                    <p className="font-roboto text-base sm:text-2xl lg:text-xl leading-4 sm:leading-tight lg:leading-none">See our collection of suspensions for the Rover P6</p>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <img className="w-24 sm:w-32 xl:w-48" src="/mgdb/suspension.svg" alt="" />
                    </div>
                </div>
                <div className={[styles.cardOrange, "flex lg:mr-2 w-full"].join(' ')}>
                    <div className="w-1/2 lg:w-2/3">
                    <h1 className="font-roboto font-bold text-xl sm:text-4xl lg:text-3xl 2xl:text-5xl text-white mb-5">Rims & Tires</h1>
                    <p className="font-roboto text-base sm:text-2xl lg:text-xl leading-4 sm:leading-tight text-white lg:leading-none">Choose from our
                        collection of rims and 
                        tires</p>
                    </div>
                    <div className="w-1/2 flex justify-end xl:items-end">
                        <img className="w-32 sm:w-48 xl:w-60" src="/mgdb/tires.svg" alt="" />
                    </div>
                </div>
            </div>
            {/*<!--Category Grid-->*/}
            <div className="grid grid-cols-cards gap-2 lg:grid-cols-3">
                <div className={[styles.gridCard, "flex flex-col row-span-2 lg:row-auto lg:flex-row"].join(' ')}>
                    <div className="w-full text-center lg:text-left lg:w-1/2">
                        <h1 className="font-roboto font-bold text-base sm:text-3xl lg:text-3xl 2xl:text-5xl text-darkblue leading-4">Engine Oils</h1>
                    </div>
                    <div className="w-full flex justify-center items-center lg:justify-end pt-4">
                        <img className="w-48 lg:w-full" src="/mgdb/engine-oil.svg" alt="" />
                    </div>
                </div>
                <div className={[styles.gridCard, "lg:py-8 lg:px-6 flex lg:flex-col"].join(' ')}>
                    <div className="w-1/2 lg:w-2/3">
                        <h1 className="font-roboto font-bold text-base sm:text-2xl lg:text-3xl 2xl:text-5xl text-darkblue leading-4 lg:text-left"><span>More</span> <br /><span>Car Parts</span></h1>
                    </div>
                    <div className="w-1/2 lg:w-full flex justify-center items-center lg:justify-end">
                        <img className="w-20 lg:w-1/2" src="/mgdb/steering-wheel.svg" alt="" />
                    </div>
                </div>
                <div className={[styles.gridCard, "lg:py-8 lg:px-6 flex lg:flex-col"].join(' ')}>
                    <div className="w-1/2 lg:w-full">
                        <h1 className="font-roboto font-bold lg:text-left text-base sm:text-2xl lg:text-3xl 2xl:text-5xl text-darkblue leading-4"><span>Other</span> <br /><span>Cars For Sale</span></h1>
                    </div>
                    <div className="w-1/2 lg:w-full flex justify-end items-center lg:justify-end">
                        <img className="w-auto" src="/mgdb/blue-car.svg" alt="" />
                    </div>
                </div> 
            </div>
        </div>
        </>
    )
}