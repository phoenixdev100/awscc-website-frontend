import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedImage from './components/FeaturedImage'
import Events from './components/Events'
import Team from './components/Team'
import SocialLinks from './components/SocialLinks'
import Support from './components/Support'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
        <Navbar />
        <Hero />
        <About />
        <FeaturedImage />
        <Events />
        <Team />
        <SocialLinks />
        <Support />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
