import Button from '../Button/Button'
import styles from './JoinUs.module.css'

const JoinUs = () => {
    return (
        <div className={`padding ${styles.container}`}>
            <div className={styles.innerContainer}>
                <div className={styles.text}>
                    <h2>Join our trustable Medifit product  community</h2>
                    <p>Join us as we build a community where wellness is accessible, education is empowering, and health is a shared journey.</p>
                    <Button text='Get Started' link='./link-external.svg' />
                </div>
                <img src="./join-us-grid.png" alt="Grid image" />
            </div>
        </div>
    )
}

export default JoinUs