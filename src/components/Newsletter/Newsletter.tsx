import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './Newsletter.module.css'

const Newsletter = () => {
    return (
        <div className={styles.newsletter}>
            <div className={styles.image}></div>
            <div className={styles.details}>
                <div className={styles.heading}>
                    <h5>Join our newsletter</h5>
                    <p>Sign up for an instant 15% Discount</p>
                </div>
                <div className={styles.input}>
                    <Input icon='mail.svg' placeholder='Enter Email' inputType='email' />
                    <Button text='Sign up' link='./link-external.svg' />
                </div>
            </div>
        </div>
    )
}

export default Newsletter