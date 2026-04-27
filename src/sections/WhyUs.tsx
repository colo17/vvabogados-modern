import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../i18n'

export default function WhyUs(){
  const sectionRef = useScrollAnimation<HTMLElement>()
  const textRef = useScrollAnimation<HTMLDivElement>()
  const figureRef = useScrollAnimation<HTMLDivElement>()
  const { lang } = useLanguage()

  const copy = {
    es: {
      title: '¿Por qué nosotros?',
      p1: 'Nosotros nos comprometemos con la excelencia en la protección de la Propiedad Intelectual y definimos cada paso con determinación y pasión. Estamos convencidos de que salvaguardar los derechos intelectuales es fundamental para el triunfo de quienes dedican su creación, ingenio y esfuerzo.',
      p2: 'Nos especializamos en soluciones integrales y personalizadas, adaptándonos a las necesidades específicas de cada cliente. Nuestra experiencia y dedicación nos permiten anticiparnos a los retos emergentes y garantizar una protección eficaz y eficiente de los derechos intelectuales.',
      p3: 'Elegirnos significa optar por un equipo comprometido con la excelencia, la innovación y la integridad en cada acción que emprendemos.',
      signature: 'Dra. Verónica Vanrell'
    },
    en: {
      title: 'Why choose us?',
      p1: 'We are committed to excellence in protecting Intellectual Property, shaping every step with determination and passion. We believe safeguarding IP rights is essential for the success of those who devote their creativity, ingenuity, and effort.',
      p2: 'We specialize in comprehensive, tailored solutions, adapting to the specific needs of every client. Our experience and dedication help us anticipate emerging challenges and ensure effective, efficient protection of IP rights.',
      p3: 'Choosing us means opting for a team committed to excellence, innovation, and integrity in everything we do.',
      signature: 'Dr. Verónica Vanrell'
    }
  } as const

  const t = copy[lang]
  return (
    <section id="porque-nosotros" className="section scroll-animate" ref={sectionRef}>
      <div className="container grid cols-2 whyus-grid">
        <div className="scroll-animate-up" ref={textRef}>
          <h2 className="section-title">{t.title}</h2>
          <div className="section-desc whyus-copy">
            <p>{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p className="whyus-signature">{t.signature}</p>
          </div>
        </div>
        <div className="card whyus-figure scroll-animate-right" ref={figureRef}>
          <img src="/images/VeroVanrell2.jpg" alt="Dra. Verónica Vanrell" />
        </div>
      </div>
    </section>
  )
}
