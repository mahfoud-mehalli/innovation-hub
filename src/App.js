import About from "./sections/About/About"
import Courses from "./sections/Courses/Courses"
import Events from "./sections/Events/Events"
import Header from "./sections/Header/Header"
import Hero from "./sections/Hero/Hero"
import Reviews from "./sections/Reviews/Reviews"
import Contact from './sections/Contact/Contact'
import Footer from './sections/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Events />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
