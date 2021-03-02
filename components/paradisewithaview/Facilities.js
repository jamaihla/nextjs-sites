export default function Facilities () {
    return (
        <>
        <div className="bg-white mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
            <div className="desktop:flex">
                <div className="">
                    <div className="mb-8 desktop:px-4">
                        <h2 className="font-sofia text-lightblack text-center desktop:text-left text-xl tablet:text-4xl font-bold pb-10">Relax and enjoy <br />
                            in our exceptional facilities</h2>
                        <p className="font-sofia text-lightblack text-center desktop:text-left text-sm tablet:text-xl">With our variety of facilities, you'll surely
                            feel like you're in paradise</p>
                    </div>
                    <div className="mx-auto tablet:grid tablet:grid-cols-2 desktop:px-4">
                        <div className="w-full my-10 tablet:mt-0">
                            <img className="mx-auto desktop:mx-0 mb-5" src="paradisewithaview/comfy-room.svg" alt="comfy room" />
                            <h3 className="font-sofia text-lightblack text-center desktop:text-left  font-semibold pb-2 tablet:text-xl">Comfy rooms</h3>
                            <p className="font-sofia text-lightblack text-center desktop:text-left text-xs tablet:text-sm">Here you get a full apartment with fitness room and spa.</p>
                        </div>
                        <div className="w-full mb-10">
                            <img className="mx-auto desktop:mx-0 mb-5" src="paradisewithaview/buffet.svg" alt="buffet" />
                            <h3 className="font-sofia text-lightblack text-center desktop:text-left font-semibold pb-2 tablet:text-xl">Delicious Buffets</h3>
                            <p className="font-sofia text-lightblack text-center desktop:text-left text-xs tablet:text-sm">Have a feast everyday whether it's
                                breakfast, lunch, dinner, or even
                                just a snack!</p>
                        </div>
                        <div className="w-full mb-10">
                            <img className="mx-auto desktop:mx-0 mb-5" src="paradisewithaview/pools.svg" alt="pools" />
                            <h3 className="font-sofia text-lightblack text-center desktop:text-left font-semibold pb-2 tablet:text-xl">Luxurious Pools</h3>
                            <p className="font-sofia text-lightblack text-center desktop:text-left text-xs tablet:text-sm">Take a swim or go on a deep dive in our
                                luxurious swimming pools.</p>
                        </div>
                        <div className="w-full mb-10">
                            <img className="mx-auto desktop:mx-0 mb-5" src="paradisewithaview/support.svg" alt="support" />
                            <h3 className="font-sofia text-lightblack text-center desktop:text-left font-semibold pb-2 tablet:text-xl">24-hour support</h3>
                            <p className="font-sofia text-lightblack text-center desktop:text-left text-xs tablet:text-sm">Our hotel staff and services are standing by
                                24/7 to attend to your needs.</p>
                        </div>
                    </div>
                </div>
                <div className="hidden tablet:block">
                    <img className="rounded-3xl" src="paradisewithaview/poolside.jpg" alt="poolside" />
                </div>
            </div>
        </div>
        </>
    )
}