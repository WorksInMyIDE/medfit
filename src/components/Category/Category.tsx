import styles from './Category.module.css'
import Heading from "../Heading/Heading"
import CategoryCard from '../CategoryCard/CategoryCard'
import OfferCard from '../OfferCard/OfferCard'
import HealthProduct from '../HealthProduct/HealthProduct'
import ThreeWayCard from '../ThreeWayCard/ThreeWayCard'

interface CategoryType {
  link: string
  heading: string
  itemCount: number
}

interface OfferTypes {
  topTip: string
  heading: string
  image: string
}

interface LatestProductType {
  image: string
  name: string
  price: number
  discount?: number
  topTip?: string
}

const Category = () => {
  const categories: CategoryType[] = [
    {
      link: './medicine-icon.svg',
      heading: 'Medicine',
      itemCount: 32
    },
    {
      link: './beauty-icon.svg',
      heading: 'Beauty',
      itemCount: 17
    },
    {
      link: './fitness-icon.svg',
      heading: 'Fitness',
      itemCount: 12
    },
    {
      link: './healthcare-icon.svg',
      heading: 'Health Care',
      itemCount: 27
    },
  ]
  const offers: OfferTypes[] = [
    {
      topTip: "Sanitizer",
      heading: "Hand sanitizer collection",
      image: "./hand-sanitizer.svg"
    },
    {
      topTip: "Top Deals",
      heading: "Face wash sale collection",
      image: "./aloe-vera.svg"
    },
    {
      topTip: "Face Mask",
      heading: "Facial mask deals save up to 50%",
      image: "./face-mask.svg"
    },

  ]

  const latestProduct: LatestProductType[] = [
    {
      image: './microscope.svg',
      name: 'Microscope',
      price: 45.00,
      topTip: "New"
    },
    {
      image: './oximeter.svg',
      name: 'Pulse Oximeter',
      price: 19.00,
      discount: 25.00,
      topTip: "Save 10%"
    },
    {
      image: './serum.svg',
      name: 'Vitamin Serum',
      price: 20.00,
      discount: 30.00,
    },
    {
      image: './high-protein.svg',
      name: 'High Protein',
      price: 50.00,
      topTip: 'New'
    },
  ]
  return (
    <section className={styles.category}>
      <Heading text='Shop By Category' />
      <div className={styles.cards}>
        {categories.map((category) => { return <CategoryCard link={category.link} heading={category.heading} itemCount={category.itemCount} /> })}
      </div>
      <div className={styles.offers}>
        {offers.map((offer) => <OfferCard topTip={offer.topTip} heading={offer.heading} image={offer.image} />)}
      </div>
      <Heading text='Latest health products' />
      <div className={styles.latestProducts}>
        {latestProduct.map(product => <HealthProduct topTip={product.topTip} image={product.image} name={product.name} price={product.price} />)}
      </div>
      <ThreeWayCard />
    </section>
  )
}

export default Category;