import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Reviews from './components/Reviews'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Reviews />
        <Contact />
      </main>
    </>
  )
}

export default App
