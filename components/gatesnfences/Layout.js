import Header from '../gatesnfences/Header'
import Footer from '../gatesnfences/Footer'

export default function Layout({children}) {
    return (
        <>
        <Header />
            {children}
        <Footer />
        </>
    )
}