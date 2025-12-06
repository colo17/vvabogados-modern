import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function WhyUs(){
  const sectionRef = useScrollAnimation()
  const textRef = useScrollAnimation()
  const figureRef = useScrollAnimation()
  return (
    <section id="porque-nosotros" className="section scroll-animate" ref={sectionRef}>
      <div className="container grid cols-2 whyus-grid">
        <div className="scroll-animate-up" ref={textRef}>
          <h2 className="section-title">¿Por qué nosotros?</h2>
          <div className="section-desc whyus-copy">
            <p>Nosotros nos comprometemos con la excelencia en la protección de la Propiedad Intelectual y definimos cada paso con determinación y pasión. Estamos convencidos de que salvaguardar los derechos intelectuales es fundamental para el triunfo de quienes dedican su creación, ingenio y esfuerzo.</p>
            <p>Nos especializamos en soluciones integrales y personalizadas, adaptándonos a las necesidades específicas de cada cliente. Nuestra experiencia y dedicación nos permiten anticiparnos a los retos emergentes y garantizar una protección eficaz y eficiente de los derechos intelectuales.</p>
            <p>Elegirnos significa optar por un equipo comprometido con la excelencia, la innovación y la integridad en cada acción que emprendemos.</p>
            <p className="whyus-signature">Dra. Verónica Vanrell</p>
          </div>
        </div>
        <div className="card whyus-figure scroll-animate-right" ref={figureRef}>
          <img src="/images/Vero Vanrell 2.jpg" alt="Dra. Verónica Vanrell" />
        </div>
      </div>
    </section>
  )
}
