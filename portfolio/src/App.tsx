import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />

        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-4">
          <div className="glass-panel max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#7ef9c7]">
              About
            </h2>
            <p className="text-lg text-[#8ea2c6]">
              This is the about section. Add your content here.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen flex items-center justify-center px-4">
          <div className="glass-panel max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#33f3ff]">
              Projects
            </h2>
            <p className="text-lg text-[#8ea2c6]">
              Showcase your amazing projects here.
            </p>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="min-h-screen flex items-center justify-center px-4">
          <div className="glass-panel max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#9e82ff]">
              Reviews
            </h2>
            <p className="text-lg text-[#8ea2c6]">
              Display testimonials and reviews here.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center justify-center px-4">
          <div className="glass-panel max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#7ef9c7] to-[#9e82ff] bg-clip-text text-transparent">
              Contact
            </h2>
            <p className="text-lg text-[#8ea2c6]">
              Get in touch with me here.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
