import "./App.css"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import HealthProducts from "./components/HealthProducts/HealthProducts"
import Testimonials from "./components/Testimonials/Testimonials"
import FollowUs from "./components/FollowUs/FollowUs"

const App = () => {
  return (
    <header>
      <Navbar />
      <Hero />
      <Category />
      <HealthProducts />
      <Testimonials />
      <FollowUs />
    </header>
  )
}

export default App