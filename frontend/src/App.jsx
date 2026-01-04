import Header from './components/Header'
import Hero from './components/Hero'
import EarningsBar from './components/EarningsBar'
import SuccessStories from './components/SuccessStories'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import './index.css'

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <EarningsBar />
            <SuccessStories />
            <ContactSection />
            <Footer />
        </div>
    )
}

export default App
