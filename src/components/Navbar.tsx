import React, { useState } from 'react'

export default function Navbar({ scrolled }: { scrolled:boolean }){
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(v => !v)
  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#inicio" className="nav-logo" onClick={close}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="6" fill="#c6a15b"/>
            <path d="M7 16L10.5 8H13.5L17 16H14.7L13.9 14H10.1L9.3 16H7Z" fill="#0b2a42"/>
          </svg>
          <span>VV Abogados</span>
        </a>

        {/* Desktop nav */}
        <nav className="nav-links nav-desktop">
          <a className="nav-link" href="#inicio">Inicio</a>
          <a className="nav-link" href="#areas">Áreas</a>
          <a className="nav-link" href="#nosotros">Nosotros</a>
          <a className="nav-link" href="#equipo">Equipo</a>
          <a className="nav-link" href="#noticias">Noticias</a>
          <a className="nav-link" href="#estudios-asociados">Estudios asociados</a>
          <a className="button" href="#contacto">Contacto</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={toggle}
        >
          <span/>
          <span/>
          <span/>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="nav-mobile-panel container">
          <a className="nav-mobile-link" href="#inicio" onClick={close}>Inicio</a>
          <a className="nav-mobile-link" href="#areas" onClick={close}>Áreas</a>
          <a className="nav-mobile-link" href="#nosotros" onClick={close}>Nosotros</a>
          <a className="nav-mobile-link" href="#equipo" onClick={close}>Equipo</a>
          <a className="nav-mobile-link" href="#noticias" onClick={close}>Noticias</a>
          <a className="nav-mobile-link" href="#estudios-asociados" onClick={close}>Estudios asociados</a>
          <a className="button" href="#contacto" onClick={close} style={{marginTop:10, width:'100%', justifyContent:'center'}}>Contacto</a>
        </div>
      )}
    </header>
  )
}
