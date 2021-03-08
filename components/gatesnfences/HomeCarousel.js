const HomeCarousel = () => {
    return (
        <>
        <div className="bg-welder-xs mobiles:h-screen py-10">
            <h1 className="font-raleway text-5xl text-center font-bold text-lightyellow leading-10"><span className="text-sushi text-6xl">DESIGNED</span><br /> to enhance<br /> the entry of your home</h1>
            <div className="mx-auto px-9 py-10">
                <div className="mb-6">
                    <button className="bg-sushi w-full p-6 font-main font-semibold uppercase text-lightyellow">Get in Touch</button>
                </div>
                <div className="mb-6">
                    <button className="bg-zomp w-full p-6 font-main font-semibold uppercase text-lightyellow">Request Quote</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default HomeCarousel