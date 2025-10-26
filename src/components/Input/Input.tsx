import styles from "./Input.module.css"

interface InputType {
    icon: string
    placeholder?: string
    inputType: string
}

const Input = ({ icon, placeholder, inputType }: InputType) => {
    return (
        <div className={styles.inputContainer}>
            <img src={icon} alt="mail icon" />
            <input type={inputType} placeholder={placeholder} />
        </div>
    )
}

export default Input