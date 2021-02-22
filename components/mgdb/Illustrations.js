import styles from '../../styles/mgdb/MGDB.module.css'

export default function Illustrations() {
    return (
        <>
        {/*Illustrations*/}
        <div className="bg-white px-9 py-10 sm:py-20 md:px-20 2xl:px-36">
            <div className="w-full mb-6">
                <h1 className="font-roboto font-bold text-lg sm:text-3xl lg:text-4xl text-darkblue text-center p-1 mb-6 lg:px-20 xl:px-56">MGBD Parts is dedicated to keeping ROVER P6 cars on the road.</h1>
                <p className="font-roboto text-center text-base sm:text-xl lg:text-lg sm:px-4 lg:px-20">We have over 30 years experience of owning, repairing, restoring
                    and running Rover P6 cars in all variants</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:content-between lg:justify-center lg:items-startmt-10">
                <div className="w-full justify-center items-center mb-20 lg:mb-0 lg:px-2">
                    <img className="w-56 sm:w-96 lg:w-auto 2xl:w-96 mx-auto mb-12 xl:mb-10" src="/mgdb/logistics_rs.svg" alt="" />
                    <p className="font-roboto text-center sm:text-xl lg:text-sm">We supply quality parts for all variants of the Rover P6</p>
                </div>
                <div className="w-full justify-center mb-20 lg:mb-0 lg:px-2 lg:pt-2">
                    <img className="w-56 sm:w-96 lg:w-full 2xl:w-96 mx-auto mb-16" src="/mgdb/manufacturing_rs.svg" alt="" />
                    <p className="font-roboto text-center sm:text-xl sm:px-8 lg:px-0 lg:text-sm">We stock predominantly brand new manufactured items but also some second hand parts</p>
                </div>
                <div className="w-full justify-center lg:mb-0 lg:px-2">
                    <img className="w-56 sm:w-96 lg:w-56 xl:w-72 2xl:w-96 mx-auto mb-11 2xl:mb-6" src="/mgdb/refurbish_rs.svg" alt="" />
                    <p className="font-roboto text-center sm:text-xl lg:text-sm">We supply quality parts for all variants of the Rover P6</p>
                </div>
            </div>
        </div>
        </>
    )
}