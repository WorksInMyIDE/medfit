import "./App.css"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Category from "./components/Category/Category"

const App = () => {
  return (
    <header>
      <Navbar />
      <Hero />
      <Category />
    </header>
  )
}

export default App