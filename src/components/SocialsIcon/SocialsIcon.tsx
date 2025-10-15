import styles from "./SocialsIcon.module.css"

interface IconType {
    icon: string
}

const SocialsIcon = ({ icon }: IconType) => {
    return (
        <div className={styles.iconContainer}>
            <img src={`${icon}`} alt="facebook icon" />
        </div>
    )
}

export default SocialsIcon