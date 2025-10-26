import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <div className={styles.logo}>
        <img src="./medfit-logo.svg" alt="Logo" />
        <span>Medfit</span>
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li>Shop</li>
        <li><Link to="/about">About</Link></li>
        <li>Contact</li>
      </ul>
      <div className={styles.icons}>
        <img src="./search-icon.svg" alt="Search" />
        <img src="./cart-icon.svg" alt="Cart" />
      </div>
    </nav>
  )
}

export default Navbar