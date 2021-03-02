import styles from '../../styles/paradisewithaview/Paradisewithaview.module.css'

export default function Main() {
    return (
        <>
            <div className="tablet:bg-lightersalmon mx-auto px-9 py-7 tablet:px-20 tablet:py-9">
                <div>
                    <h1 className="font-sofia font-bold text-lightblack text-center text-3xl tablet:text-5xl desktop:text-6xl xxl:text-8xl">Experience Paradise <br />In Every Vacation</h1>
                </div>
                <div>
                    <form>
                        {/*Room form */}
                    </form>
                </div>
                <main className="mx-auto px-9 py-7 tablet:px-0 xxl:px-80">
                    <div className="bg-white rounded-md p-10 mt-14 relative z-10">
                        <form className="desktop:flex justify-center items-end" action="">
                            <div className="mx-2 desktop:w-1/4">
                                <label className="font-sofia xxl:text-2xl" for="hotel">Choose Hotel</label>
                                <select className={[styles.inputField, "w-full bg-transparent"].join(' ')} name="hotel" id="">
                                    <option className="font-sofia" value="royal garden">Royal Garden</option>
                                    <option className="font-sofia" value="pacific monarch" selected>Pacific Monarch</option>
                                </select>
                            </div>
                            <div className="mx-2 desktop:w-1/4">
                                <label className="font-sofia xxl:text-2xl" for="checkin">Check In</label>
                                <input className={[styles.inputField, "w-full"].join(' ')} type="date" name="checkindate" id="checkin" value="2021-02-10" min="2021-02-10" max="2021-12-31" />
                            </div>
                            <div className="mx-2 desktop:w-1/4">
                                <label className="font-sofia xxl:text-2xl" for="checkin">Check Out</label>
                                <input className={[styles.inputField, "w-full"].join(' ')} type="date" name="checkindate" id="checkin" value="2021-02-10" min="2021-02-10" max="2021-12-31" />
                            </div>
                            <div className="mx-2 desktop:w-1/4">
                                <label className="font-sofia xxl:text-2xl" for="guests">Guests</label>
                                <input className={[styles.inputField, "w-full"].join(' ')} type="number" id="guests" name="guests" value="5"
                                    min="1" max="10" />
                            </div>
                            <div className="mt-8 text-center desktop:w-1/4">
                                <button className="rounded-md bg-redviolet px-10 py-2 text-offwhite text-sm desktop:text-2xl desktop:px-5 font-sofia">
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