import styles from './Heading.module.css'

interface Props {
  text: string
}

const Heading = ({text}: Props) => {
  return (
    <h3 className={styles.heading}>{text}</h3>
  )
}

export default Heading