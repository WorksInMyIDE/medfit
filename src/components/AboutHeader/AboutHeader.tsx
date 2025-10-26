import Perks from "../Perks/Perks"
import styles from "./AboutHeader.module.css"

const AboutHeader = () => {
    return (
        <div className={`padding ${styles.container}`}>
            <div className={styles.heading}>
                <h2>Health products you can trust service you deserve</h2>
                <div className={styles.images}>
                    <img src="./pill-1.png" alt="about hero image" />
                    <img src="./pill-2.png" alt="about hero image" />
                    <img src="./pill-3.png" alt="about hero image" />
                </div>
            </div>
            <div className={styles.aboutus}>
                <h3>About us</h3>
                <p>Our focus is on nurturing wellness and empowering health for all ages well being for people worldwide.</p>
            </div>
            <Perks />
        </div>
    )
}

export default AboutHeader