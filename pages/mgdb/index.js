import Header from '../../components/mgdb/Header'
import Illustrations from '../../components/mgdb/Illustrations'
import Main from '../../components/mgdb/Main'
import ProductCategories from '../../components/mgdb/ProductCategories'
import Shop from '../../components/mgdb/Shop'
import SubscriptionForm from '../../components/mgdb/SubscriptionForm'
import Footer from '../../components/mgdb/Footer'

export default function MGDB () {
    return(
        <>
        <Header />
        <Main />
        <ProductCategories />
        <Illustrations />
        <Shop />
        <SubscriptionForm />
        <Footer />
        </>
    )
}