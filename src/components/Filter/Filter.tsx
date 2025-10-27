import { useState } from "react"
import styles from "./Filter.module.css"

interface Filters {
  name: string
  value: boolean
}

const categories: Filters[] = [
  {
    name: "Healthcare",
    value: false
  },
  {
    name: "Fitness",
    value: false
  },
  {
    name: "Medicine",
    value: false
  },
  {
    name: "Beauty",
    value: false
  },
]

const prices: Filters[] = [
  {
    name: "$0 - $10",
    value: false
  },
  {
    name: "$11 - $20",
    value: false
  },
  {
    name: "$21 - $30",
    value: false
  },
  {
    name: "$31 - $ 40",
    value: false
  },
  {
    name: "$41 - $50",
    value: false
  },
]

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked)
    console.log(isChecked)
  }
  return (
    <div className={styles.container}>
      <p className={styles.numberOfItems}>Showing 120 items</p>
      <hr />
      <div className={styles.category}>
        <h3>Category</h3>
        <div>
          <div className={styles.categoryContainer}>
            {
              categories.map(item => <div className={styles.inputContainer}>
                <input type="checkbox" id="checkbox" value={Number(item.value)} onChange={handleCheck} />
                <label htmlFor="checkbox">{item.name}</label>
              </div>)
            }
          </div>
        </div>
      </div>
      <hr />
      <div className={styles.category}>
        <h3>Price Ranges</h3>
        <div>
          <div className={styles.categoryContainer}>
            {
              prices.map(item => <div className={styles.inputContainer}>
                <input type="checkbox" id="checkbox" value={Number(item.value)} onChange={handleCheck} />
                <label htmlFor="checkbox">{item.name}</label>
              </div>)
            }
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Filter