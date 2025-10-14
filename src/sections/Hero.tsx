import React from 'react'

export default function Hero(){
  return (
    <section id="inicio" className="hero">
      <div className="container hero-content">
        <div className="hero-logo">
          <img src="/images/Logo Horizontal Blanco.png" alt="VV Abogados" />
        </div>
        <p>Nuestro compromiso con la excelencia en la protección de la Propiedad Intelectual define cada uno de nuestros pasos, abordamos cada desafío con determinación y pasión.</p>
        <div className="hero-cta">
          <a href="#contacto" className="button">Agendar consulta</a>
          <a href="#areas" className="button button--ghost">Áreas de práctica</a>
        </div>
      </div>
    </section>
  )
}
