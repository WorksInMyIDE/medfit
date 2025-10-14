import "./App.css"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import HealthProducts from "./components/HealthProducts/HealthProducts"
import Testimonials from "./components/Testimonials/Testimonials"

const App = () => {
  return (
    <header>
      <Navbar />
      <Hero />
      <Category />
      <HealthProducts />
      <Testimonials />
    </header>
  )
}

export default App