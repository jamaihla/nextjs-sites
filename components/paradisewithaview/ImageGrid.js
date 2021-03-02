export default function ImageGrid () {
    return (
    <>
    <div className="bg-whitish mx-auto px-9 py-7 tablet:px-20 tablet:py-9 xxl:pb-40">
        <div className="hidden tablet:flex items-center justify-between">
            <div className="w-36 h-28 mr-2 desktop:w-1/4">
                <img className="rounded-xl" src="paradisewithaview/beach-chair.jpg" alt="beach-chair" />
            </div>
            <div className="w-74 h-49 mr-2 desktop:w-2/4">
                <img className="rounded-xl" src="paradisewithaview/beach-shot.jpg" alt="beach shot" />
            </div>
            <div className="w-35 h-52 relative -top-32 xxl:-top-52 desktop:w-1/4 z-0">
                <img className="rounded-xl mr-2" src="paradisewithaview/tropics.jpg" alt="tropics" />
            </div>
        </div>
        <div className="desktop:mt-72 xxl:pt-40">
            <h2 className="font-sofia text-lightblack text-center text-2xl tablet:text-4xl font-bold">Distinctive Vacation Rentals 
                and Executive Housing</h2>
            <p className="font-sofia text-lightblack text-center text-sm tablet:text-xl font-medium mt-10">Nobis enim ipsam aliquam deserunt rerum omnis soluta ut. Corporis consectetur nemo consequatur. 
                Possimus alias non et. Quasi atque porro quia enim quisquam assumenda veniam.</p>
        </div>
    </div>
    </>
    )
}