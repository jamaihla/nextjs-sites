import Layout from "../../components/paradisewithaview/Layout"
import Main from "../../components/paradisewithaview/Main"
import ImageGrid from '../../components/paradisewithaview/ImageGrid'
import HotelRooms from '../../components/paradisewithaview/HotelRooms'
import Rooms from '../../components/paradisewithaview/Rooms'
import Facilities from '../../components/paradisewithaview/Facilities'

export default function Paradise() {
    return (
        <>
            <Layout>
                <Main />
                <ImageGrid />
                <HotelRooms />
                <Rooms />
                <Facilities />
            </Layout>
        </>
    )
}