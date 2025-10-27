import { useState } from "react"
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

interface LinkObjects {
  id: number
  link: string
  linkTitle: string
}

const links: LinkObjects[] = [
  {
    id: 0,
    link: "/",
    linkTitle: "Home"
  },
  {
    id: 1,
    link: "/shop",
    linkTitle: "Shop"
  },
  {
    id: 2,
    link: "/about",
    linkTitle: "About"
  },
  {
    id: 3,
    link: "/contact",
    linkTitle: "Contact"
  },
]

const Navbar = () => {

  const [selected, setSelected] = useState(0);

  const handleSelected = (link: LinkObjects) => {
    setSelected(link.id)
  }

  return (
    <nav>
      <div className={styles.logo}>
        <img src="./medfit-logo.svg" alt="Logo" />
        <span>Medfit</span>
      </div>
      <ul>
        {
          links.map(link => <li key={link.id} onClick={() => { handleSelected(link) }} ><Link style={selected === link.id ? { color: "var(--heading-text)" } : { color: "var(--body-text)" }} to={`${link.link}`}>{link.linkTitle}</Link></li>)
        }
      </ul>
      <div className={styles.icons}>
        <img src="./search-icon.svg" alt="Search" />
        <img src="./cart-icon.svg" alt="Cart" />
      </div>
    </nav>
  )
}

export default Navbar