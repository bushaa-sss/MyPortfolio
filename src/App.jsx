import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import SafarGooCaseStudy from './pages/SafarGooCaseStudy'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
  }, [])

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg text-text-primary">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/safargoo" element={<SafarGooCaseStudy />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
