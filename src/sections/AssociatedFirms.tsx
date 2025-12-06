import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../i18n'

const FIRMS = {
  es: [
    {
      name: 'Pérez del Castillo',
      url: 'https://www.perezdelcastillo.com',
      img: '/images/perezdelcastillo.webp',
      blurb: 'Dirigido por el Dr. Federico Pérez del Castillo. Especial foco en inversiones, compraventa de empresas (M&A), real estate y asesoramiento sucesorio, combinando visión estratégica y solución práctica de conflictos.'
    },
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
  ],
  en: [
    {
      name: 'Pérez del Castillo',
      url: 'https://www.perezdelcastillo.com',
      img: '/images/perezdelcastillo.webp',
      blurb: 'Led by Dr. Federico Pérez del Castillo. Strong focus on investments, M&A, real estate, and estate planning—combining strategic vision with practical dispute resolution.'
    },
    {
      name: 'LegalMind',
      url: 'https://www.legalmind.com.uy',
      img: '/images/legalmind.webp',
      blurb: 'Founded by Dr. María Laura Escudero. Business, civil, commercial, labor, and international law counsel. Supports companies of all sizes with preventive and compliance-oriented advice.'
    },
    {
      name: 'Cauce Consultores',
      url: 'https://www.cauceconsultores.uy',
      img: '/images/cauceconsultores.jpg',
      blurb: 'Led by Dr. Álvaro Martín da Silva Falcón. Experience in litigation, arbitration, and business advisory, including sports justice (AUF). Coordinates with internal teams for effective outcomes.'
    },
  ]
} as const

export default function AssociatedFirms(){
  const sectionRef = useScrollAnimation();
  const { lang } = useLanguage()
  const firms = FIRMS[lang]
  const badge = lang === 'es' ? 'Estudios asociados' : 'Associated firms'
  const cta = lang === 'es' ? 'Conocer más' : 'Learn more'

  return (
    <section
      id="estudios-asociados"
      className="section scroll-animate-right"
      style={{ paddingTop: 0, paddingBottom: 0, marginBottom: 60 }}
      ref={sectionRef}
    >
      <div className="container assoc-stack">
        {firms.map((f) => (
          <article className="assoc-panel" key={f.name}>
            <div className="assoc-image" style={{ backgroundImage: `url(${f.img})` }} aria-hidden />
            <div className="assoc-content">
              <span className="badge">{badge}</span>
              <h2 className="assoc-title">{f.name}</h2>
              <p className="assoc-desc">{f.blurb}</p>
              <a className="button" href={f.url} target="_blank" rel="noreferrer">{cta}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
