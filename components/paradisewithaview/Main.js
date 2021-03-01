export default function Main() {
    return (
        <>
            <div className="tablet:bg-lightersalmon mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
                <div>
                    <h1 class="font-sofia font-bold text-lightblack text-center text-3xl tablet:text-5xl desktop:text-6xl 2xl:text-8xl">Experience Paradise <br />In Every Vacation</h1>
                </div>
                <div>
                    <form>
                        {/*Room form */}
                    </form>
                </div>
                <main class="mx-auto px-9 py-7 tablet:px-0 2xl:px-80">
                    <div class="bg-white rounded-md p-10 mt-14 relative z-10">
                        <form class="desktop:flex justify-center items-end" action="">
                            <div class="mx-2 w-1/4">
                                <label class="font-sofia 2xl:text-2xl" for="hotel">Choose Hotel</label>
                                <select class="w-full inputField bg-transparent" name="hotel" id="">
                                    <option class="font-sofia" value="royal garden">Royal Garden</option>
                                    <option class="font-sofia" value="pacific monarch" selected>Pacific Monarch</option>
                                </select>
                            </div>
                            <div class="mx-2 w-1/4">
                                <label class="font-sofia 2xl:text-2xl" for="checkin">Check In</label>
                                <input class="w-full inputField" type="date" name="checkindate" id="checkin" value="2021-02-10" min="2021-02-10" max="2021-12-31" />
                            </div>
                            <div class="mx-2 w-1/4">
                                <label class="font-sofia 2xl:text-2xl" for="checkin">Check Out</label>
                                <input class="w-full inputField" type="date" name="checkindate" id="checkin" value="2021-02-10" min="2021-02-10" max="2021-12-31" />
                            </div>
                            <div class="mx-2 w-1/4">
                                <label class="font-sofia 2xl:text-2xl" for="guests">Guests</label>
                                <input class="w-full inputField" type="number" id="guests" name="guests" value="5"
                                    min="1" max="10" />
                            </div>
                            <div class="mt-8 text-center w-1/4">
                                <button class="rounded-md bg-redviolet px-10 py-2 text-offwhite text-sm desktop:text-2xl desktop:px-5 font-sofia">
                                    Book Now
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    )
}