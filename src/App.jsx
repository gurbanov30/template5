import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Metrics from './components/Metrics'
import Menu from './components/Menu'
import Features from './components/Features'
import About from './components/About'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Subscription from './components/Subscription'
import Footer from './components/Footer'
import Notification from './components/Notification'
import ScrollToTop from './components/ScrollToTop'
import Contact from './components/Contact'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const [showNotification, setShowNotification] = useState(false)
  const [emailSubscribed, setEmailSubscribed] = useState(false)
  const [emailInput, setEmailInput] = useState('')

  const resetCart = useCallback(() => {
    setCartCount(0)
  }, [])

  return (
    <div className="text-[#2d2219] antialiased">
      <header className="mx-3 mt-3 overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-[#dfd5c6] to-[#bca693] relative shadow-xs">
        <div className="absolute inset-0 opacity-25 bg-cover bg-center mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=1200&q=80')" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Navbar cartCount={cartCount} resetCart={resetCart} />
          <Hero />
        </div>
      </header>

      <Metrics />
      <Menu />
      <Features />
      <About />
      <Gallery />
      <Testimonials />
      <Subscription emailInput={emailInput} setEmailInput={setEmailInput} emailSubscribed={emailSubscribed} setEmailSubscribed={setEmailSubscribed} />
      <Contact />
      <Footer />
      <Notification show={showNotification} />
      <ScrollToTop />
    </div>
  )
}
