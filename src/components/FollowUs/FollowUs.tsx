import Heading from "../Heading/Heading"
import styles from './FollowUs.module.css'

const images: string[] = ["./follow-1.png", "./follow-2.png", "./follow-3.png", "./follow-4.png"]

const FollowUs = () => {
    return (
        <div className={styles.followUs}>
            <Heading text="Follow us @medifit" />
            <div className={styles.images}>
                {images.map(link => <img src={link} alt="little gallery image" />)}
            </div>
        </div>
    )
}

export default FollowUs