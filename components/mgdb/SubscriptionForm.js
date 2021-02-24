import styles from '../../styles/mgdb/MGDB.module.css'

export default function SubscriptionForm () {
    return (
        <>
        <div>
            <img className="w-full" src="/mgdb/waveg.svg" alt="Wave" />
        </div>
        <div className="px-9 py-4 md:px-20 xl:px-64">
            <div className={[styles.subscribe, "relative z-10 -top-20 sm:-top-32 md:-top-36 lg:-top-44 xl:-top-56 2xl:-top-72"].join(' ')}>
                <h1 className="font-roboto font-bold text-2xl sm:text-4xl text-darkblue text-center mb-2 sm:mb-4">Get the latest updates from us</h1>
                <p className="font-roboto text-center sm:text-xl mb-8 sm:mb-12">We'll send you some updates and special offers</p>
                <div className="flex justify-center pb-10 sm:hidden">
                <form className="w-full px-3" action="">
                    <input className={[styles.subscriptionForm, "w-full"].join(' ')} type="text" placeholder="Enter your email address" />
                    <div className="flex justify-center pt-6 sm:hidden">
                        <button type="button" className="font-roboto w-36 bg-brightorange text-white py-3 rounded-lg">Get Updates</button>
                    </div>    
                </form>
                </div>
                <div className={[styles.subscriptionForm, "hidden sm:flex"].join(' ')}>
                    <form className="w-full pl-3 flex items-center" action="">
                        <input className="w-full px-2" type="text" placeholder="Enter your email address" />
                        <div className="flex justify-center">
                            <button type="button" className="font-roboto w-36 bg-brightorange text-white py-3 rounded-lg">Get Updates</button>
                        </div>    
                    </form>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center sm:pt-6">
                    <p className="font-roboto text-sm sm:text-base text-center mr-2">Become a part of our ever growing community</p>
                    <p className="font-roboto font-bold text-sm sm:text-base  text-center text-brightorange">Join our Community</p>
                </div>
                
            </div>
        </div>
        </>
    )
}