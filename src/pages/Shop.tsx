import Filter from "../components/Filter/Filter"
import Items from "../components/Items/Items"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import styles from "./Shop.module.css"

const Shop = () => {
    return (
        <>
            <Navbar />
            <div className={styles.layout}>
                <Filter />
                <Items />
            </div>
            <Footer />
        </>
    )
}

export default Shop