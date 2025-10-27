import Filter from "../components/Filter/Filter"
import Items from "../components/Items/Items"
import Navbar from "../components/Navbar/Navbar"
import styles from "./Shop.module.css"
import Footer from "../components/Footer/Footer"

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