import React, { useEffect, useState } from 'react'
import { theme } from './theme'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import PracticeAreas from './sections/PracticeAreas'
import About from './sections/About'
import Team from './sections/Team'
import TestimonialsNews from './sections/TestimonialsNews'
import Contact from './sections/Contact'
import AssociatedFirms from './sections/AssociatedFirms'
import Footer from './sections/Footer'

export default function App(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const getScrollTop = () => (
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0
    )
    const setFromScroll = () => setScrolled(getScrollTop() > 1)

    // Initial and delayed update (covers mobile URL bar settling)
    setFromScroll()
    const t = setTimeout(setFromScroll, 300)

    // Scroll/resize listeners
    const passive = { passive: true } as AddEventListenerOptions
    window.addEventListener('scroll', setFromScroll, passive)
    document.addEventListener('scroll', setFromScroll, passive)
    window.addEventListener('resize', setFromScroll)
    window.addEventListener('orientationchange', setFromScroll)

    // Also observe the hero section as a secondary signal
    const hero = document.getElementById('inicio')
    let io: IntersectionObserver | null = null
    if (hero) {
      io = new IntersectionObserver(([entry]) => {
        const atTop = entry.isIntersecting && entry.boundingClientRect.top >= 0 && getScrollTop() <= 1
        setScrolled(!atTop)
      }, { threshold: [0, 0.01, 0.5, 0.99, 1] })
      io.observe(hero)
    }

    return () => {
      clearTimeout(t)
      window.removeEventListener('scroll', setFromScroll)
      document.removeEventListener('scroll', setFromScroll)
      window.removeEventListener('resize', setFromScroll)
      window.removeEventListener('orientationchange', setFromScroll)
      if (io) io.disconnect()
    };
  }, []);
  return (
    <>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Team />
        <TestimonialsNews />
        <Contact />
        <AssociatedFirms />
      </main>
      <Footer />
    </>
  )
}
