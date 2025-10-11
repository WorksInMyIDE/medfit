import styles from './HoverButton.module.css'

interface Props {
    text: string
    image: string
    onHover: () => void
}


const HoverBtn = ({text, image, onHover}: Props) => {
  return (
    <button className={styles.hoverBtn} onMouseOver={onHover}>
        <img src={image} alt={`an image of ${text}`} />
        {text}
    </button>
  )
}

export default HoverBtn