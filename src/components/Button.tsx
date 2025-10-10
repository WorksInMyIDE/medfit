import styles from "./Button.module.css"

interface Button {
    text: string
    link : string
    reverse? : boolean
}

const Button = ({text, link, reverse} : Button) => {
  return (
    <button className={styles.button} style={{flexDirection: reverse ? "row-reverse" : "row"}}>
        <img src={link} alt="Bag" />
        <span>{text}</span>
    </button>
  )
}

export default Button