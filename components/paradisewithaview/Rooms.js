import styles from '../../styles/paradisewithaview/Paradisewithaview.module.css'

export default function Rooms () {
    return (
        <>
        <div class="bg-offwhite mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
            <div class="">
                <h2 class="font-sofia text-lightblack text-center text-xl tablet:text-4xl font-bold pb-5">In demand
                    accomodations</h2>
                <p class="font-sofia text-lightblack text-center text-sm tablet:text-xl pb-8">Five-star service in every 
                    tropical experience</p>
            </div>
            <div class="desktop:flex">
                <div className={styles.card}>
                    <img class="rounded-t-3xl w-full" src="paradisewithaview/queen-kapiolani.jpg" alt="queen kapiolani room" />
                    <div class="px-8">
                        <h3 class="font-sofia text-lightblack text-base tablet:text-2xl py-6 font-semibold">The Queen Kapiolani Room</h3>
                        <span class="block font-sofia text-lightblack text-sm tablet:text-base">One Queen Bed</span>
                        <span class="block font-sofia text-lightblack text-sm tablet:text-base">One Queen Sofa Bed</span>
                        <div class="desktop:flex desktop:justify-between desktop:mt-16 2xl:mt-24 items-center">
                            <span class="inline-block font-sofia text-darkseagreen text-sm tablet:text-2xl desktop:text-xl font-semibold py-8 desktop:p-0 2xl:p-0">$245 a night</span>
                            <button class="bg-redviolet w-full text-sm 2xl:text-xl tablet:w-1/3 desktop:w-1/2 2xl:w-1/3 mx-auto desktop:mx-0 2xl:mx-0 flex justify-center text-offwhite px-2 py-3 items-center rounded-md">
                                <span class="">Reserve</span>
                                <img class="ml-2" src="paradisewithaview/right-arrow.svg" alt="right-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img class="rounded-t-xl w-full" src="paradisewithaview/princess-kuhio.jpg" alt="princess kuhio room" />
                    <div class="px-8">
                        <h3 class="font-sofia text-lightblack text-base tablet:text-2xl py-6 font-semibold">The Princess Kuhio Loggia</h3>
                        <span class="block font-sofia text-lightblack text-sm tablet:text-base">Two Double Beds</span>
                        <span class="block font-sofia text-lightblack text-sm tablet:text-base">One Queen Sofa Bed</span>
                        <div class="desktop:flex desktop:justify-between desktop:mt-16 2xl:mt-24 items-center">
                            <span class="inline-block font-sofia text-darkseagreen text-sm tablet:text-2xl desktop:text-xl font-semibold py-8 desktop:p-0 2xl:p-0">$350 a night</span>
                            <button class="bg-redviolet w-full text-sm 2xl:text-xl tablet:w-1/3 desktop:w-1/2 2xl:w-1/3 mx-auto desktop:mx-0 2xl:mx-0 flex justify-center text-offwhite px-2 py-3 items-center rounded-md">
                                <span class="">Reserve</span>
                                <img class="ml-2" src="paradisewithaview/right-arrow.svg" alt="right-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <img class="rounded-t-xl w-full" src="paradisewithaview/king-kalakaua.jpg" alt="king kalakaua room" />
                    <div class="px-8">
                        <h3 class="font-sofia text-lightblack text-base tablet:text-2xl py-6 font-semibold">The King Kalakaua Suite</h3>
                        <span class="block font-sofia text-lightblack text-sm tablet:text-base">One Queen Bed</span>
                        <span class="block font-sofia text-lightblack text-sm tablet:text-base">One Queen Sofa Bed</span>
                        <div class="desktop:flex desktop:justify-between desktop:mt-24 2xl:mt-24 items-center">
                            <span class="inline-block font-sofia text-darkseagreen text-sm tablet:text-2xl desktop:text-xl font-semibold py-8 desktop:p-0 2xl:p-0">$750 a night</span>
                            <button class="bg-redviolet w-full text-sm 2xl:text-xl tablet:w-1/3 desktop:w-1/2 2xl:w-1/3 mx-auto desktop:mx-0 2xl:mx-0 flex justify-center text-offwhite px-2 py-3 items-center rounded-md">
                                <span class="">Reserve</span>
                                <img class="ml-2" src="paradisewithaview/right-arrow.svg" alt="right-arrow" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}