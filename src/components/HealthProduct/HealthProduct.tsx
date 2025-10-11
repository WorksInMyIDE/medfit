import styles from './HealthProduct.module.css'

interface Props {
  image: string
  name: string
  price: number
  discount?: number
}

const HealthProduct = ({image, name, price, discount}: Props) => {
  return (
    <div className={styles.healthProduct}>
        <div className={styles.imageContainer}>
            <img src={image} alt="b12 medicine" />
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