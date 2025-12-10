import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../i18n'

export default function About(){
  const sectionRef = useScrollAnimation()
  const { lang } = useLanguage()

  const copy = {
    es: {
      badge: 'Nosotros',
      title: 'Quiénes Somos',
      desc: 'En VV ABOGADOS, nos enorgullece ofrecer servicios especializados en Propiedad Intelectual a nuestros clientes. Nuestro Departamento de PI ha sido diseñado con la misión de salvaguardar los valiosos activos intangibles confiados a nosotros, con una perspectiva integral y un enfoque único para cada cliente.',
      item1: 'Nuestros servicios: asesoría en registros de marcas, patentes, derechos de autor, auditorías de PI, registro de nombres dominios, protección de variedades vegetales, redacción de contratos, litigios de PI, infracciones marcarias - Antipirateria y gestión de registro de marcas en Aduanas de Uruguay. ',
      item2: 'Tanto en Uruguay como en el extranjero: estamos comprometidos a ofrecer un servicio excepcional y personalizado a cada cliente.'
    },
    en: {
      badge: 'About us',
      title: 'Who We Are',
      desc: 'At VV ABOGADOS, we are proud to deliver specialized Intellectual Property services. Our IP department is built to safeguard the valuable intangible assets entrusted to us, with a holistic view and a tailored approach for every client.',
      item1: 'Our services: advice on trademarks, patents, copyrights, IP audits, domain registrations, plant variety protection, contract drafting, IP litigation, anti-counterfeiting and customs recordals in Uruguay.',
      item2: 'In Uruguay and abroad: we are committed to providing exceptional and personalized service to every client.'
    }
  } as const

  const t = copy[lang]
  
  return (
    <section id="nosotros" className="section scroll-animate" style={{paddingTop:0}} ref={sectionRef}>
      <div className="container grid cols-2">
        <div className="card">
          <img src="/images/Grupal fondo gris.jpg" alt="VV Abogados" />
        </div>
        <div className="about-copy">
          <span className="badge">{t.badge}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-desc about-copy__text">{t.desc}</p>
          <ul className="about-copy__list">
            <li>{t.item1}</li>
            <li>{t.item2}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}