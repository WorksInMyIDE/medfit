import { items } from "../../utils/constants"
import HealthProduct from "../HealthProduct/HealthProduct"
import styles from "./Items.module.css"

const Items = () => {
    return (
        <div className={styles.container}>
            {
                items.map(item => <HealthProduct name={item.name} image={item.imageLink} price={item.price} category={item.category} discount={item.discount} key={item.name} />)
            }
        </div>
    )
}

export default Items