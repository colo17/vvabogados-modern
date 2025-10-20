import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const FIRMS = [
  {
    name: 'LegalMind',
    url: 'https://www.legalmind.com.uy',
    img: '/images/legalmind.webp',
    blurb: 'Fundada por la Dra. María Laura Escudero. Asesoramiento en Derecho Empresarial, Civil, Comercial, Laboral e Internacional. Acompañan a compañías de diversos tamaños con enfoque preventivo y de cumplimiento.'
  },
  {
    name: 'Cauce Consultores',
    url: 'https://www.cauceconsultores.uy',
    img: '/images/cauceconsultores.jpg',
    blurb: 'Dirigido por el Dr. Álvaro Martín da Silva Falcón. Experiencia en litigios, arbitraje y asesoramiento empresarial, incluyendo justicia deportiva (AUF). Trabajo coordinado con equipos internos para resultados efectivos.'
  },
  {
    name: 'Pérez del Castillo',
    url: 'https://www.perezdelcastillo.com',
    img: '/images/perezdelcastillo.webp',
    blurb: 'Dirigido por el Dr. Federico Pérez del Castillo. Especial foco en inversiones, compraventa de empresas (M&A), real estate y asesoramiento sucesorio, combinando visión estratégica y solución práctica de conflictos.'
  },
]

export default function AssociatedFirms(){
  const sectionRef = useScrollAnimation();

  return (
    <section
      id="estudios-asociados"
      className="section scroll-animate-right"
      style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 60 }}
      ref={sectionRef}
    >
      <div className="container assoc-stack">
        {FIRMS.map((f) => (
          <article className="assoc-panel" key={f.name}>
            <div className="assoc-image" style={{ backgroundImage: `url(${f.img})` }} aria-hidden />
            <div className="assoc-content">
              <span className="badge">Estudios asociados</span>
              <h2 className="assoc-title">{f.name}</h2>
              <p className="assoc-desc">{f.blurb}</p>
              <a className="button" href={f.url} target="_blank" rel="noreferrer">Conocer más</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
