import Head from 'next/head'
import Nav from './Nav'
import Main from './Main'

export default function Header() {
    return (
        <>
        <Head>
            <title>Penny Juice</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="preconnect" href="https://fonts.gstatic.com" /> 
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" />
        </Head>   
        <div className="w-screen sm:w-full lg:max-w-full xl:px-36 h-full mx-auto" id="main">
            <header className="py-1.75 sm:py-5.5 lg:py-6.5 border-b border-lightcherry xl:w-full">
                <Nav />
            </header>
        </div>
        </>
    )
}