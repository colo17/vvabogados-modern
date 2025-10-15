import React from 'react'

export default function Hero(){
  return (
    <section id="inicio" className="hero hero-animated">
      <div className="container hero-content">
        <div className="hero-logo hero-logo-animated">
          <img src="/images/Logo Horizontal Blanco.png" alt="VV Abogados" />
        </div>
        <p className="hero-text-animated">Nuestro compromiso con la excelencia en la protección de la Propiedad Intelectual define cada uno de nuestros pasos, abordamos cada desafío con determinación y pasión.</p>
        <div className="hero-cta hero-cta-animated">
          <a href="#contacto" className="button">Agendar consulta</a>
          <a href="#areas" className="button button--ghost">Áreas de práctica</a>
        </div>
      </div>
    </section>
  )
}
