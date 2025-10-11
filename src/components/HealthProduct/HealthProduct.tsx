import HoverBtn from '../HoverBtn/HoverBtn'
import styles from './HealthProduct.module.css'
import gsap from 'gsap'

interface Props {
  image: string
  name: string
  price: number
  discount?: number
  topTip?: string
}

const HealthProduct = ({image, name, price, discount, topTip}: Props) => {

  const handleHover = ()=> {
    // learn ref in react and fix this section of the code so hover effects work
    gsap.to(".hoverBtn", {top: 120, backgroundColor: '!green'})
  }

  return (
    <div className={styles.healthProduct}>
        <div className={styles.imageContainer}>
            {topTip &&  <div className={styles.topTip}>{topTip}</div>}
            <img src={image} alt="b12 medicine" />
            <HoverBtn image='./cart-2.svg' text='Shop Now' onHover={handleHover} />
        </div>
        <div className={styles.info}>
            <h5>{name}</h5>
            <div>
                <div className={styles.price}>${price} USD</div>
                <div className={styles.discount}>
                  {discount ? `$${discount} USD` : '' }
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthProduct