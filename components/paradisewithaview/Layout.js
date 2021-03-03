import Header from '../paradisewithaview/Header'
import Footer from '../paradisewithaview/Footer'

export default function Layout({children}) {
    return (
        <>
        <div className="bg-beachfront tablet:bg-none">
            <Header />
            {children}
        </div>
        <Footer />
        </>
    )
}