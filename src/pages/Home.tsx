import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Category from '../components/Category/Category'
import HealthProducts from '../components/HealthProducts/HealthProducts'
import Testimonials from '../components/Testimonials/Testimonials'
import FollowUs from '../components/FollowUs/FollowUs'
import Footer from '../components/Footer/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Category />
            <HealthProducts />
            <Testimonials />
            <FollowUs />
            <Footer />
        </>
    )
}

export default Home