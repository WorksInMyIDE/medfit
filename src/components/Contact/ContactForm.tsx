import styles from "./ContactForm.module.css"
import Input from "../Input/Input"
import Button from "../Button/Button"

const ContactForm = () => {
    return (
        <div className={`padding ${styles.container}`}>
            <div className={styles.heading}>
                <div>
                    <h2>Contact Us</h2>
                    <img src="./contactus.svg" alt="Telephone Icon" />
                </div>
                <p>Have questions or need support? Get in touch with our team – we're here to help!</p>
            </div>
            {/* form here */}
            <form className={styles.form} action="#">
                <div className={styles.layout}>
                    <label htmlFor="fullname">Full Name</label>
                    <Input icon="./user.svg" inputType="text" />
                </div>
                <div className={styles.layout}>
                    <label htmlFor="email">Email</label>
                    <Input icon="./mail.svg" inputType="email" />
                </div>
                <div className={styles.layout}>
                    <label htmlFor="phonenumber">Phone Number</label>
                    <Input icon="./phone-big.svg" inputType="email" />
                </div>
                <div className={styles.layout}>
                    <label htmlFor="call">Schedule to receive call</label>
                    <Input icon="./clock.svg" inputType="date" />
                </div>
                <div className={styles.layout}>
                    <label htmlFor="call">Leave a Message</label>
                    <textarea rows={5} name="message" id="message"></textarea>
                </div>
                <div className={styles.button}><Button text="Submit" link="./mail.svg" onclick={e => { e.preventDefault() }} /></div>
            </form>
        </div>
    )
}

export default ContactForm