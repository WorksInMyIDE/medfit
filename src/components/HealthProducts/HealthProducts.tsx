import Heading from '../Heading/Heading'
import HealthProduct from '../HealthProduct/HealthProduct'
import styles from './HealthProducts.module.css'

interface productType {
  image: string
  name: string
  price: number
  discount?: number
}

const HealthProducts = () => {
  const products: productType[] = [
    {
      image: './b12-medicine.svg',
      name: "B12 medicine",
      price: 19.00,
      discount: 25.00
    },
    {
      image: './tonometer.svg',
      name: "Tonometer",
      price: 19.00,
    },
    {
      image: './ecg-cardiograph.svg',
      name: "ECG cardiograph",
      price: 20.00,
      discount: 35.00
    },
    {
      image: './blood-glucose-meter.svg',
      name: "Blood glucose meter",
      price: 15.00,
    },
    {
      image: './stethoscope.svg',
      name: "Stethoscope",
      price: 20.00,
      discount: 35.00
    },
    {
      image: './hand-gloves.svg',
      name: "Lab hand gloves",
      price: 20.00,
      discount: 35.00
    },
    {
      image: './inhaler-pressure-drop.svg',
      name: "Inhaler pressure drop",
      price: 35.00,
    },
    {
      image: './multi-vitamin.svg',
      name: "Multi vitamin",
      price: 20.00,
    },
  ]
  return (
    <section className={styles.healthProducts}>
        <Heading text='Latest Health Product'/>
        <div className={styles.products}>
          {products.map( product => <HealthProduct image={product.image} name={product.name} price={product.price} discount={product.discount} />)}
        </div>
    </section>
  )
}

export default HealthProducts