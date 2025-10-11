import "./App.css"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"
import HealthProducts from "./components/HealthProducts/HealthProducts"

const App = () => {
  return (
    <header>
      <Navbar />
      <Hero />
      <Category />
      <HealthProducts />
    </header>
  )
}

export default App