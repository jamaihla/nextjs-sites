import Head from 'next/head'
import Link from 'next/link'
import Nav from '../mgdb/Nav'
import styles from '../../styles/mgdb/MGDB.module.css'

export default function Header() {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" /> 
            <title>MGDB Parts</title>
        </Head>
        <header className="flex bg-white justify-between items-center px-9 py-4 md:px-20 2xl:px-36">
        <div className="flex lg:hidden">
            <button type="button" className="text-darkblue focus:text-gray-300 hover:text-gray-300 focus-outline-none"><svg className="h-6 w-6 fill-current" id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 256"><rect y="213.33" width="384" height="42.67"/><rect y="106.67" width="384" height="42.67"/><rect width="384" height="42.67"/></svg></button>
        </div>
        <div className="lg:w-1/4 xl:w-auto">
            <img className="h-12" src="./mgdb/MGDB.svg" alt="MGDB logo" />
        </div>
        <div className="flex lg:w-3/4 xl:w-full xl:justify-end justify-between items-center">
            <Nav />
            <div className="hidden lg:block">
                <button className={styles.signin} type="button">Sign In</button>
            </div>
            <div className="xl:mx-10">
                <button type="button" className="text-brightorange focus:text-gray-300 hover:text-gray-300 focus-outline-none">
                    <svg className="h-8 w-8 fill-current pt-1" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 32.08"><path id="_001-shopping-cart" data-name=" 001-shopping-cart" d="M33.56,5.84H6.2L5.79,1.31A1.43,1.43,0,0,0,4.36,0H1.44a1.44,1.44,0,0,0,0,2.88H3c.88,9.78-1.39-15.5,1.66,18.41A5.51,5.51,0,0,0,6.77,25a4.36,4.36,0,1,0,7.53,1.2h7.86a4.36,4.36,0,1,0,5.58-2.61,4.12,4.12,0,0,0-1.48-.26h-16a2.68,2.68,0,0,1-2.46-1.62l23-1.35A1.44,1.44,0,0,0,32,19.31L35,7.63a1.44,1.44,0,0,0-1.05-1.74,1.34,1.34,0,0,0-.35,0ZM10.2,29.2a1.48,1.48,0,1,1,1.48-1.48A1.48,1.48,0,0,1,10.2,29.2Zm16.06,0a1.48,1.48,0,1,1,1.49-1.48,1.49,1.49,0,0,1-1.49,1.48ZM29.5,17.59,7.36,18.89,6.45,8.72H31.72Z" transform="translate(0 0)"/></svg>
                </button>
            </div>
        </div>
        </header>
        </>
    )
}