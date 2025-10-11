import styles from './OfferCard.module.css'

interface Props {
    topTip: string
    heading: string
    image: string
}

const OfferCard = ({topTip, heading, image}: Props) => {
  return (
    <div className={styles.offerCard}>
        <div className={styles.infoArea}>
            <div className={styles.topTip}>{topTip}</div>
            <div>
                <h5>{heading}</h5>
                <span>
                    <img src="./bag.svg" alt="bag" />
                    <p>shop now</p>
                </span>
            </div>
        </div>
        <div className={styles.image}>
            <img src={image} alt={`image about ${heading}`} />
        </div>
    </div>
  )
}

export default OfferCard