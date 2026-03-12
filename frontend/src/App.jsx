import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Clients from './components/Clients'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './index.css'

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Services />
            <About />
            <Projects />
            <Clients />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default App
