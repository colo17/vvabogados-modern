import React, { useState } from 'react'
import { useLanguage } from '../i18n'

export default function Navbar({ scrolled }: { scrolled:boolean }){
  const [open, setOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const { lang, setLang } = useLanguage()

  const copy = {
    es: {
      home: 'Inicio',
      why: 'Por qué nosotros',
      about: 'Quiénes somos',
      areas: 'Áreas',
      team: 'Equipo',
      partners: 'Estudios asociados',
      contact: 'Contacto',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      esLabel: 'Ver sitio en Español',
      enLabel: 'Ver sitio en Inglés'
    },
    en: {
      home: 'Home',
      why: 'Why us',
      about: 'About us',
      areas: 'Practice areas',
      team: 'Team',
      partners: 'Associated firms',
      contact: 'Contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      esLabel: 'Switch to Spanish',
      enLabel: 'Switch to English'
    }
  } as const

  const t = copy[lang]

  const toggle = () => setOpen(v => !v)
  const close = () => setOpen(false)

  const LanguageSwitch = () => {
    const options = [
      { code: 'es' as const, label: t.esLabel, name: 'Español' },
      { code: 'en' as const, label: t.enLabel, name: 'Inglés' }
    ]

    const toggleDropdown = () => setLangMenuOpen(v => !v)
    const closeDropdown = () => setLangMenuOpen(false)
    const handleSelect = (code: 'es' | 'en') => {
      setLang(code)
      closeDropdown()
      setOpen(false)
    }

    return (
      <div
        className={`lang-toggle ${langMenuOpen ? 'is-open' : ''}`}
        aria-label={lang === 'es' ? t.enLabel : t.esLabel}
        onBlur={(e) => {
          const next = e.relatedTarget as Node | null
          if (!next || !e.currentTarget.contains(next)) closeDropdown()
        }}
      >
        <button
          type="button"
          className={`lang-btn lang-btn--current ${langMenuOpen ? 'is-active' : ''}`}
          onClick={toggleDropdown}
          aria-expanded={langMenuOpen}
          aria-haspopup="true"
        >
          <span className="lang-btn__code">{lang.toUpperCase()}</span>
          <span className="lang-caret" aria-hidden="true">▾</span>
        </button>

        {langMenuOpen && (
          <div className="lang-dropdown" role="menu">
            {options.map(opt => (
              <button
                key={opt.code}
                type="button"
                className={`lang-btn lang-btn--option ${lang === opt.code ? 'is-current' : ''}`}
                onClick={() => handleSelect(opt.code)}
                aria-label={opt.label}
                role="menuitem"
              >
                <span className="lang-btn__code">{opt.code.toUpperCase()}</span>
                <span className="lang-btn__label">{opt.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }

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
          <a className="nav-link" href="#inicio" style={{ color: scrolled ? '#6441a4' : '#fff' }}>{t.home}</a>
          <a className="nav-link" href="#porque-nosotros" style={{ color: scrolled ? '#6441a4' : '#fff' }}>{t.why}</a>
          <a className="nav-link" href="#nosotros" style={{ color: scrolled ? '#6441a4' : '#fff' }}>{t.about}</a>
          <a className="nav-link" href="#areas" style={{ color: scrolled ? '#6441a4' : '#fff' }}>{t.areas}</a>
          <a className="nav-link" href="#equipo" style={{ color: scrolled ? '#6441a4' : '#fff' }}>{t.team}</a>
          <a className="nav-link" href="#estudios-asociados" style={{ color: scrolled ? '#6441a4' : '#fff' }}>{t.partners}</a>
          <a 
            className="button" 
            href="#contacto"
            style={{
              background: scrolled ? '#6441a4' : '#fff',
              color: scrolled ? '#fff' : '#6441a4',
              borderColor: scrolled ? '#6441a4' : '#fff'
            }}
          >
            {t.contact}
          </a>
          <LanguageSwitch />
        </nav>

        {/* Mobile hamburger */}
        <div className="lang-switch-mobile">
          <LanguageSwitch />
        </div>

        <button
          className={`nav-hamburger ${open ? "is-open" : ""}`}
          aria-label={open ? t.closeMenu : t.openMenu}
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
          <a className="nav-mobile-link" href="#inicio" onClick={close}>{t.home}</a>
          <a className="nav-mobile-link" href="#porque-nosotros" onClick={close}>{t.why}</a>
          <a className="nav-mobile-link" href="#nosotros" onClick={close}>{t.about}</a>
          <a className="nav-mobile-link" href="#areas" onClick={close}>{t.areas}</a>
          <a className="nav-mobile-link" href="#equipo" onClick={close}>{t.team}</a>
          <a className="nav-mobile-link" href="#estudios-asociados" onClick={close}>{t.partners}</a>
          <a className="button" href="#contacto" onClick={close} style={{marginTop:10, width:'100%', justifyContent:'center'}}>{t.contact}</a>
        </div>
      )}
    </header>
  )
}
