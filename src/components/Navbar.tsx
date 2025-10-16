import React, { useState } from 'react'

export default function Navbar({ scrolled }: { scrolled:boolean }){
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(v => !v)
  const close = () => setOpen(false)

  return (
    <header 
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
    >
      <div className="container navbar-inner">
        <a href="#inicio" className="nav-logo" onClick={close}>
          <img 
            src={scrolled ? "/images/Logo Horizontal Violeta.png" : "/images/Logo Horizontal Blanco.png"} 
            alt="VV Abogados" 
            height="32" 
          />
        </a>

        {/* Desktop nav */}
        <nav className="nav-links nav-desktop">
          <a className="nav-link" href="#inicio" style={{ color: scrolled ? '#6441a4' : '#fff' }}>Inicio</a>
          <a className="nav-link" href="#areas" style={{ color: scrolled ? '#6441a4' : '#fff' }}>Áreas</a>
          <a className="nav-link" href="#nosotros" style={{ color: scrolled ? '#6441a4' : '#fff' }}>Nosotros</a>
          <a className="nav-link" href="#equipo" style={{ color: scrolled ? '#6441a4' : '#fff' }}>Equipo</a>
          <a className="nav-link" href="#noticias" style={{ color: scrolled ? '#6441a4' : '#fff' }}>Noticias</a>
          <a className="nav-link" href="#estudios-asociados" style={{ color: scrolled ? '#6441a4' : '#fff' }}>Estudios asociados</a>
          <a 
            className="button" 
            href="#contacto"
            style={{
              background: scrolled ? '#6441a4' : '#fff',
              color: scrolled ? '#fff' : '#6441a4',
              borderColor: scrolled ? '#6441a4' : '#fff'
            }}
          >
            Contacto
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`nav-hamburger ${open ? "is-open" : ""}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={toggle}
          style={{
            borderColor: scrolled ? 'rgba(100, 65, 164, 0.35)' : 'rgba(255,255,255,.35)'
          }}
        >
          <span style={{ background: scrolled ? '#6441a4' : '#fff' }}/>
          <span style={{ background: scrolled ? '#6441a4' : '#fff' }}/>
          <span style={{ background: scrolled ? '#6441a4' : '#fff' }}/>
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
