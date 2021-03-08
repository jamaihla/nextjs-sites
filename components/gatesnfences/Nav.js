import Link from 'next/link'

const Nav = () => {
    return(
        <>
            <div className="tablet:hidden px-9 shadow-md">
                <div className="hidden desktop:block">
                    <img src="/gatesnfences/gates-fences-lg.svg" alt="Gates N Fences Logo" />
                </div>
                <div className="desktop:hidden py-6 flex justify-between">
                    <img src="/gatesnfences/gates-fences-mobile.svg" alt="Gates N Fences Logo" />
                    <img src="/gatesnfences/hamburger-menu.svg" alt="hamburger menu" />
                </div>
            </div>
        </>
    )
}

export default Nav