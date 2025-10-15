import SocialsIcon from '../SocialsIcon/SocialsIcon'
import styles from './Footer.module.css'

interface linkType {
    page: string
    link: string
}

const links: linkType[] = [
    {
        page: 'Home',
        link: ''
    },
    {
        page: 'Shop',
        link: ''
    },
    {
        page: 'About',
        link: ''
    },
    {
        page: 'Contact',
        link: ''
    },
    {
        page: 'Blog',
        link: ''
    },
    {
        page: 'Privacy Policy',
        link: ''
    },
    {
        page: 'FAQs',
        link: ''
    },
]

const Footer = () => {
    return (
        <footer className={`padded ${styles.footer}`}>
            <div className={styles.pages}>
                <h6>Pages</h6>
                <div className={styles.links}>
                    {links.map(link => <span>{link.page}</span>)}
                </div>
            </div>
            <div className={styles.pages}>
                <h6>Utilities</h6>
                <div className={styles.links}>
                    {links.map(link => <span>{link.page}</span>)}
                </div>
            </div>
            <div className={styles.socials}>
                <span className={styles.footerLogo}><img src="./medfit-logo.svg" alt="logo" /><p>Medifit</p></span>
                <p>We provide the ultimate solution for your online store and all your healthcare needs.</p>
                <div className={styles.icons}>
                    <SocialsIcon icon='./facebook.svg' />
                    <SocialsIcon icon='./instagram.svg' />
                    <SocialsIcon icon='./youtube.svg' />
                    <SocialsIcon icon='./twitter.svg' />
                </div>
            </div>
            <div className={styles.contact}>
                <div>
                    <h6>Address</h6>
                    <span>
                        <img src="./location.svg" alt="location icon" />
                        1640 Parker Rd. Allentown, New Mexico 31134
                    </span>
                </div>
                <div>
                    <h6>Contact</h6>
                    <div>
                        <span>
                            <img src="./mail-icon.svg" alt="Email Icon" />
                            hello@gmail.com
                        </span>
                        <span>
                            <img src="./phone.svg" alt="Phone Icon" />
                            ( 233 ) 57-062-3541
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer