import styles from './CategoryCard.module.css'

interface Props {
  link: string
  heading: string
  itemCount: number
}

const CategoryCard = ({link, heading, itemCount}: Props) => {
  return (
    <div className={styles.categoryCard}>
      <img src={link} alt="medicine icon" />
      <div>
        <h5 className={styles.cardHeading}>{heading}</h5>
        <p className={styles.itemCount}>{itemCount} Items</p>
      </div>
    </div>
  )
}

export default CategoryCard