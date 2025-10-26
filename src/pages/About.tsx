import AboutHeader from "../components/AboutHeader/AboutHeader"
import Footer from "../components/Footer/Footer"
import Goal from "../components/Goal/Goal"
import JoinUs from "../components/JoinUs/JoinUs"
import Navbar from "../components/Navbar/Navbar"

const About = () => {
    return (
        <>
            <Navbar />
            <AboutHeader />
            <Goal />
            <JoinUs />
            <Footer />
        </>
    )
}

export default About