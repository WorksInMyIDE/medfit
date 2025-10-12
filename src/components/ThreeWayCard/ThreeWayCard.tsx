import styles from './ThreeWayCard.module.css'

const ThreeWayCard = () => {
    return (
        <div className={styles.threeWayContainer}>
            <div className={styles.card}>
                <img src="./warranty.svg" alt="warranty" />
                <div>
                    <h5>30 days warranty</h5>
                    <p>Enjoy peace of mind with warranty</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="./exchange.svg" alt="warranty" />
                <div>
                    <h5>Exchange Policy</h5>
                    <p>You're satisfied with your purchase</p>
                </div>
            </div>
            <div className={styles.card}>
                <img src="./payment.svg" alt="warranty" />
                <div>
                    <h5>Secure payment</h5>
                    <p>Shop with confidence everytime</p>
                </div>
            </div>
        </div>
    )
}

export default ThreeWayCard