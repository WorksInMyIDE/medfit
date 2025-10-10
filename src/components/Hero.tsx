import styles from './Hero.module.css'
import Button from './Button'

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroText}>
            <h1>Your trusted care now and always</h1>
            <p>For the best results, align your health needs with your medication plan</p>
            <Button link="/bag-icon.svg" text="Shop Now"/>
        </div>
        <div className={styles.heroImage}>
            <img src="./hero-image.png" alt="Hero Image" />
        </div>
    </div>
  )
}

export default Hero