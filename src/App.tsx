
import './App.css'
import Hero from './components/Hero'
import Articles from './sections/Articles'
import NewsletterSignup from './components/NewsletterSignup'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='bg-black min-h-screen text-white'>
    <Navbar />
     <Hero />
     <Articles />
     <NewsletterSignup />
     <Footer />
    </div>
  )
}

export default App
