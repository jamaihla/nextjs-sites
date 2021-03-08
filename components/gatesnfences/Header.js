import Nav from '../../components/gatesnfences/Nav'
import Head from 'next/head'

const Header = () => {
    return (
        <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://use.typekit.net/lwl4jbc.css"></link>
            <title>Gates N Fences</title>
        </Head>
        <Nav />
        </>
    )
}

export default Header