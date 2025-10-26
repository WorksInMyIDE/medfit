import styles from "./Perks.module.css"

const Perks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src="./free-shipping.svg" alt="free shipping" />
                <p>Free shipping</p>
            </div>
            <div className={styles.card}>
                <img src="./easy-refund.svg" alt="easy refund" />
                <p>Easy refund</p>
            </div>
            <div className={styles.card}>
                <img src="./online-support.svg" alt="online payment" />
                <p>Online support</p>
            </div>
            <div className={styles.card}>
                <img src="./flexible-payment.svg" alt="flexible payment" />
                <p>Flexible payment</p>
            </div>
        </div>
    )
}

export default Perks