import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav>
        <div className={styles.logo}>
            <img src="./medfit-logo.svg" alt="Logo" />
            <span>Medfit</span>
        </div>
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className={styles.icons}>
            <img src="./search-icon.svg" alt="Search" />
            <img src="./cart-icon.png" alt="Cart" />
        </div>
    </nav>
  )
}

export default Navbar