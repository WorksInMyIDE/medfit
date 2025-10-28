import { useState } from "react"
import styles from "./Filter.module.css"

interface FilterOption {
  name: string
  value: boolean
}

const CATEGORIES: FilterOption[] = [
  { name: "Healthcare", value: false },
  { name: "Fitness", value: false },
  { name: "Medicine", value: false },
  { name: "Beauty", value: false },
]

const PRICE_RANGES: FilterOption[] = [
  { name: "$0 - $10", value: false },
  { name: "$11 - $20", value: false },
  { name: "$21 - $30", value: false },
  { name: "$31 - $40", value: false },
  { name: "$41 - $50", value: false },
]

const Filter = () => {
  const [filters, setFilters] = useState({
    categories: CATEGORIES,
    prices: PRICE_RANGES
  })

  const handleFilterToggle = (type: 'categories' | 'prices', index: number) => {
    setFilters(prev => ({
      ...prev,
      [type]: prev[type].map((item, i) =>
        i === index ? { ...item, value: !item.value } : item
      )
    }))
  }

  const FilterSection = ({ title, options, type }: {
    title: string;
    options: FilterOption[];
    type: 'categories' | 'prices'
  }) => (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.optionsContainer}>
        {options.map((option, index) => (
          <div key={option.name} className={styles.option}>
            <input
              type="checkbox"
              id={`${type}-${index}`}
              checked={option.value}
              onChange={() => handleFilterToggle(type, index)}
              className={styles.checkbox}
            />
            <label htmlFor={`${type}-${index}`} className={styles.label}>
              {option.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className={styles.container}>
      <p className={styles.resultsCount}>Showing 120 items</p>
      <hr className={styles.divider} />

      <FilterSection
        title="Category"
        options={filters.categories}
        type="categories"
      />

      <hr className={styles.divider} />

      <FilterSection
        title="Price Ranges"
        options={filters.prices}
        type="prices"
      />

      <hr className={styles.divider} />
    </div>
  )
}

export default Filter