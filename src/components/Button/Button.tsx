import styles from "./Button.module.css"

interface Button {
  text: string
  link: string
  reverse?: boolean //make reverse optional, set to row when ommited implicitly
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ text, link, reverse }: Button) => {
  return (
    // use reverse to dynamically set row or row-reverse property
    <button className={styles.button} style={{ flexDirection: reverse ? "row-reverse" : "row" }}>
      <img src={link} alt="Bag" />
      <span>{text}</span>
    </button>
  )
}

export default Button