export default function HotelRooms () {
    return (
        <>
        <div class="bg-lightersalmon mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
            <div class="block desktop:grid desktop:grid-cols-2">
                <div class="desktop:pr-20">
                    <h2 class="font-sofia text-lightblack text-center desktop:text-left text-2xl tablet:text-4xl font-bold py-8">Royal Garden</h2>
                    <div class="py-8">
                        <p class="font-sofia text-lightblack text-center desktop:text-left text-sm tablet:text-xl">Located short steps away from the excitement
                            of world famous Waikiki beach, the Royal Garden
                            at Waikiki hotel awaits you upon arrival. On a
                            peaceful tree-lined lane, just near Ala Wai waterway,
                            this resort hotel with its elegant tropical gardens
                            effectively merge European eloquence with
                            Hawaii's tropical appeal.</p>
                    </div>
                    <button class="bg-redviolet w-1/2 tablet:w-1/3 desktop:flex justify-center text-offwhite px-2 py-3 items-center rounded-md font-sofia hidden">
                        Explore
                        <img class="ml-2" src="paradisewithaview/right-arrow.svg" alt="right arrow" />
                    </button>
                </div>
                <div class="mb-5">
                    <img src="paradisewithaview/royalgarden.jpg" alt="" />
                </div>
                
                <div class="flex justify-center items-center desktop:hidden">
                    <button class="bg-redviolet w-1/2 tablet:w-1/3 flex justify-center text-offwhite px-2 py-3 items-center rounded-md font-sofia">
                        Explore
                        <img class="ml-2" src="paradisewithaview/right-arrow.svg" alt="right arrow" />
                    </button>
                </div>
            </div>        
        </div>
        <div class="bg-white mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
            <div class="block desktop:grid desktop:grid-cols-2">
                <div class="row-start-1 col-start-2 desktop:pl-20">
                    <h2 class="font-sofia text-lightblack text-center desktop:text-right text-2xl tablet:text-4xl font-bold py-8">Pacific Monarch</h2>
                    <div class="py-8">
                        <p class="font-sofia text-lightblack text-center desktop:text-right text-sm tablet:text-xl">This the best location in Waikiki the exact
                            center of everything, 100 feet to the beach.
                            The International Market Place
                            is one block away. the best restaurant is
                            in the building. The best kids beach is behind
                            the seawall just to the left, 
                            the best surfing is just to the right.</p>
                    </div>
                    <div class="flex justify-end">
                        <button class="hidden bg-redviolet w-1/2 tablet:w-1/3 desktop:flex justify-center text-offwhite px-2 py-3 items-center rounded-md font-sofia">
                            Explore
                            <img class="ml-2" src="paradisewithaview/right-arrow.svg" alt="" />
                        </button>
                    </div>
                    
                </div>
                <div class="mb-5">
                    <img src="paradisewithaview/pacificmonarch.jpg" alt="" />
                </div>
                <div class="flex justify-center items-center desktop:hidden">
                    <button class="bg-redviolet w-1/2 tablet:w-1/3 flex justify-center text-offwhite px-2 py-3 items-center rounded-md font-sofia">
                        Explore
                        <img class="ml-2" src="paradisewithaview/right-arrow.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}