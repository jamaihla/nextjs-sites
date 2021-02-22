import styles from '../../styles/mgdb/MGDB.module.css'

export default function Main() {
    return(
        <>
        <main className="bg-darkblue lg:bg-lightgray lg:bg-main-lg px-9 md:px-20 bg-cover lg:pb-2 2xl:pb-12 2xl:px-36">
        {/*<!--screen mode main--> */}
        <div className="hidden lg:flex">
            <div className="w-1/2 2xl:pt-14">
                <h1 className="font-roboto font-bold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl px-9 pt-10 2xl:pt-0 lg:px-0 lg:leading-10">
                    <span>Your one-stop shop for</span> <br className="hidden 2xl:block" /> <span>Rover P6's parts</span>
                </h1>
                <h3 className="font-roboto text-white text-lg sm:text-xl xl:text-3xl pt-7">New, refurbished, and used parts.</h3>
            </div>
            <div className="w-2/3 2xl:w-1/2">
                <div className="pb-6 pt-14 lg:pt-10">
                    <img className="w-full sm:w-96 lg:w-full mx-auto" src="/mgdb/main-img.svg" alt="" />
                </div>
            </div>
        </div>
        {/*<!--mobile mode main--> */}
        <h1 className="lg:hidden font-roboto font-bold text-white text-2xl sm:text-3xl text-center px-4 pt-10">
            Your one-stop shop for Rover P6's parts
        </h1>
        <h3 className="lg:hidden font-roboto text-white text-lg sm:text-xl text-center pt-7">New, refurbished, and used parts.</h3>
        <div className="lg:px-20 2xl:px-52 lg:relative lg:z-20 lg:-top-72 2xl:-top-72 ">
            <div className="bg-white rounded-md lg:rounded-xl px-5 py-10 mt-14 xl:mt-0 mb-7 md:px-10 xl:py-12 2xl:py-20 2xl:px-16">
                <form className="lg:flex lg:justify-between lg:items-center" action="">
                    <div className="lg:mr-1">
                        <label className="font-roboto text-base lg:text-sm 2xl:text-xl" for="parts">Choose Parts</label>
                        <input className={[styles.inputField, "w-full"].join(' ')} type="text" placeholder="Ex. Bearings, Lights, Exhaust" />
                    </div>
                    <div className="lg:mr-1">
                        <label className="font-roboto text-base lg:text-sm 2xl:text-xl mb-2" for="model" >Select Model</label>
                        <input className={[styles.inputField, "w-full"].join(' ')} type="text" placeholder="Rover P6" />
                    </div>
                    <div className="lg:mr-1">    
                        <label className="font-roboto text-base lg:text-sm 2xl:text-xl mb-2" for="location" >Your Location</label>
                        <input className={[styles.inputField, "w-full"].join(' ')} type="text" placeholder="Anaheim, CA" />
                    </div>
                    <div className="pt-3 lg:mt-3 w-36 lg:w-36 mx-auto">
                        <button type="button" className="w-full bg-brightorange hover:bg-bluegray text-white py-3 rounded-md flex lg:py-1 ">
                            <svg className="w-4 mx-4 lg:mr-0" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.99 18.35"><g id="surface1"><path id="Path_3" data-name="Path 3" d="M12.53,10.88a6.89,6.89,0,1,0-2.12,2l5.08,5.05a1.45,1.45,0,0,0,2.1-2h0l-.06-.05Zm-5.64.47A4.45,4.45,0,1,1,11.34,6.9a4.44,4.44,0,0,1-4.45,4.45Z" transform="translate(0 0)" fill="#fff"/></g></svg>
                            <span className="font-roboto text-base mx-3 lg:ml-1 ">Search</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div className="lg:hidden pb-6">
            <img className="w-full sm:w-96 mx-auto" src="/mgdb/main-img.svg" alt="" />
        </div>
    </main>
        </>
    )
}