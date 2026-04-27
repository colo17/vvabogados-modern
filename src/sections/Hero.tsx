import React, { useState, useEffect } from 'react'
import { useLanguage } from '../i18n'

const TEAM_IMAGES = [
  '/images/HeroNuevo5.jpg',
  '/images/HeroNuevo4.jpg',
  '/images/team2.jpg',
  '/images/HeroNuevo6.jpg',
  '/images/team3.jpg',
  '/images/HeroNuevo3.jpg',
  '/images/team4.jpg',
]

export default function Hero(){
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)
  const { lang } = useLanguage()

  const copy = {
    es: {
      text: 'Nuestro compromiso con la excelencia en la protección de la Propiedad Intelectual define cada uno de nuestros pasos, abordamos cada desafío con determinación y pasión.',
      ctaPrimary: 'Contacto',
      ctaSecondary: 'Áreas de práctica'
    },
    en: {
      text: 'Our commitment to excellence in protecting Intellectual Property drives every step we take; we tackle each challenge with determination and passion.',
      ctaPrimary: 'Contact Us',
      ctaSecondary: 'Practice areas'
    }
  } as const

  const t = copy[lang]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % TEAM_IMAGES.length
      )
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const heroElement = document.getElementById('inicio')
    if (!heroElement) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setAnimationKey(prev => prev + 1)
          }
        })
      },
      { 
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    observer.observe(heroElement)

    return () => {
      observer.unobserve(heroElement)
    }
  }, [])

  return (
    <section id="inicio" className="hero hero-animated hero-carousel">
      {/* Image Carousel Background */}
      <div className="hero-carousel-container">
        {TEAM_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`hero-carousel-slide ${
              index === currentImageIndex ? 'active' : ''
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Dark Overlay for better text readability */}
      <div className="hero-overlay" />
      
      {/* Content */}
      <div className="container hero-content">
        <div key={`logo-${animationKey}-${lang}`} className="hero-logo hero-logo-animated">
          <img 
            src="/images/LogoHorizontalBlanco.png" 
            alt="VV Abogados" 
            className="hero-logo-desktop"
          />
          <img 
            src="/images/LogoVerticalBlanco.png" 
            alt="VV Abogados" 
            className="hero-logo-mobile"
          />
        </div>
        <p key={`text-${animationKey}-${lang}`} className="hero-text-animated">{t.text}</p>
        <div key={`cta-${animationKey}-${lang}`} className="hero-cta hero-cta-animated">
          <a href="#contacto" className="button">{t.ctaPrimary}</a>
          <a href="#areas" className="button button--ghost">{t.ctaSecondary}</a>
        </div>
      </div>
    </section>
  )
}
