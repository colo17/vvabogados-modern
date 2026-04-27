import React, { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../i18n'

type Lang = 'es' | 'en'

const AREAS = [
  {
    title: { es: 'Registro de Marcas y Patentes', en: 'Trademark and Patent filing' },
    desc: { es: 'Ambos registros aseguran que los derechos de propiedad intelectual sean reconocidos y protegidos legalmente, fortaleciendo la posición en el mercado y facilitando la defensa contra infracciones.', en: 'Both filings ensure IP rights are legally recognized and protected, strengthening market position and enabling enforcement against infringement.' },
    icon: 'M5 12h14M12 5v14'
  },
  {
    title: { es: 'Derechos de Autor', en: 'Copyrights' },
    desc: { es: 'El servicio de protección del derecho de autor se encarga de resguardar las creaciones originales de una persona, como obras literarias, artísticas, musicales o científicas, contra el uso no autorizado.', en: 'We safeguard original works—literary, artistic, musical or scientific—against unauthorized use.' },
    icon: 'M4 8h16M4 16h10'
  },
  {
    title: { es: 'Registro de Software', en: 'Software registration' },
    desc: { es: 'Asesoramos en la protección legal de programas informáticos mediante su registro, dejando constancia de autoría, titularidad y fecha cierta para fortalecer la defensa frente a usos no autorizados.', en: 'We advise on the legal protection of software through registration, documenting authorship, ownership, and date of creation to strengthen enforcement against unauthorized use.' },
    icon: 'M4 6h16v12H4z M8 10h8M8 14h5'
  },
  {
    title: { es: 'Registro de Marca en Aduana', en: 'Customs recordal' },
    desc: { es: 'Al registrar una marca en aduana, se facilita la vigilancia y el control sobre productos importados y exportados, garantizando que solo los productos genuinos sean comercializados, y se ayuda a prevenir la entrada de falsificaciones al mercado.', en: 'Customs recordals enable border monitoring to stop counterfeit goods and ensure only genuine products enter or leave the market.' },
    icon: 'M12 2l3 7h7l-5.5 4 2.1 7L12 16 5.4 20 7.5 13 2 9h7z'
  },
  {
    title: { es: 'Auditoría de Activos de PI', en: 'IP assets due diligence' },
    desc: { es: 'El servicio de auditoría o due diligence sobre activos de propiedad intelectual evalúa y verifica el estado, valor y legalidad de los activos intangibles de una empresa, como marcas, patentes, derechos de autor y secretos comerciales.', en: 'IP audits/due diligence assess the status, value, and legality of intangible assets—trademarks, patents, copyrights, and trade secrets.' },
    icon: 'M3 12h18M3 8h12M3 16h8'
  },
  {
    title: { es: 'Registro de Nombres de Dominio', en: 'Domain name registration' },
    desc: { es: 'El servicio de registro de nombres de dominio facilita la adquisición y administración de direcciones web para una empresa o individuo.', en: 'We handle acquisition and management of domain names for businesses and individuals.' },
    icon: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
  },
  {
    title: { es: 'Protección de Variedades Vegetales', en: 'Plant variety protection' },
    desc: { es: 'El servicio de protección de variedades vegetales asegura los derechos exclusivos sobre nuevas variedades de plantas, protegiendo las innovaciones en la agricultura y horticultura.', en: 'We secure exclusive rights over new plant varieties, protecting agricultural and horticultural innovations.' },
    icon: 'M12 2v20M2 12h20M7 7l10 10M17 7L7 17'
  },
  {
    title: { es: 'Redacción de Contratos', en: 'Contract drafting' },
    desc: { es: 'El servicio de redacción de contratos se encarga de crear documentos legales que formalizan acuerdos entre partes y regulan sus derechos y obligaciones.', en: 'We draft legal agreements that formalize deals and set out parties’ rights and obligations.' },
    icon: 'M4 4h16v16H4z M8 8h8M8 12h8M8 16h6'
  },
  {
    title: { es: 'Asesoría Contenciosa en PI', en: 'IP contentious advisory' },
    desc: { es: 'El servicio de asesoramiento en materia contenciosa para la protección de los derechos de propiedad intelectual ofrece apoyo legal especializado en la resolución de disputas relacionadas con activos intangibles.', en: 'Specialized advice for disputes over IP assets, guiding enforcement and defense strategies.' },
    icon: 'M5 12l5 5L19 7'
  },
  {
    title: { es: 'Combate a la Falsificación y Piratería', en: 'Anti-counterfeiting & anti-piracy' },
    desc: { es: 'El servicio de combate a la falsificación y piratería se enfoca en proteger los activos de propiedad intelectual de una empresa contra la producción y distribución ilegal de productos falsificados o pirateados.', en: 'We protect IP assets against counterfeit and pirated goods through coordinated enforcement actions.' },
    icon: 'M2 12h20M12 2v20'
  },
  {
    title: { es: 'Fashion Law', en: 'Fashion Law' },
    desc: { es: 'Este servicio se centra en proteger la propiedad intelectual en la industria de la moda, como marcas y diseños, y en la redacción de contratos para acuerdos de licencia y distribución. También aborda los derechos laborales para asegurar condiciones justas para los trabajadores y gestiona los aspectos legales de la exportación e importación, garantizando el cumplimiento de normativas y la protección contra falsificaciones.', en: 'We protect fashion IP (trademarks, designs), draft license and distribution agreements, address labor considerations, and manage export/import compliance to prevent counterfeits.' },
    icon: 'M6 20l6-16 6 16M8 14h8'
  },
  {
    title: { es: 'Derecho Deportivo y PI en el Deporte', en: 'Sports law & IP in sports' },
    desc: { es: 'Asesoramos a clubes, deportistas y agentes en contratos, licencias de imagen, transferencia de derechos y protección de activos intangibles en la industria deportiva, alineando cumplimiento normativo y gestión comercial.', en: 'We advise clubs, athletes, and agents on contracts, image rights, rights transfers, and IP protection in sports, aligning compliance with business goals.' },
    icon: 'M12 2l3 7h-6l3-7M5 22l14-8-14-8v16z'
  },
]

function Icon({ d }:{ d:string }){
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d}/>
    </svg>
  )
}

export default function PracticeAreas(){
  const sectionRef = useScrollAnimation()
  const { lang } = useLanguage()
  const [currentAreaIndex, setCurrentAreaIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  
  const nextArea = () => {
    setCurrentAreaIndex((prev) => (prev + 1) % AREAS.length)
  }
  
  const prevArea = () => {
    setCurrentAreaIndex((prev) => (prev - 1 + AREAS.length) % AREAS.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null)
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !isDragging) return
    
    const currentTouch = e.targetTouches[0].clientX
    const diff = currentTouch - touchStart
    setTouchEnd(currentTouch)
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isDragging) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }
    
    const distance = touchStart - touchEnd
    const threshold = 50

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        nextArea()
      } else {
        prevArea()
      }
    }
    
    setIsDragging(false)
    setDragOffset(0)
    setTouchStart(null)
    setTouchEnd(null)
  }
  
  return (
    <section id="areas" className="section scroll-animate-right" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{lang === 'es' ? 'Áreas de práctica' : 'Practice areas'}</h2>
        <p className="section-desc">{lang === 'es' ? 'Servicios prestados en Uruguay y mediante una red de corresponsales en el exterior.' : 'Services delivered in Uruguay and through a trusted network of foreign associates.'}</p>
        
        {/* Desktop Grid */}
        <div className="grid cols-3 areas-desktop">
          {AREAS.map((a, index) => {
            const cardKey = `${a.title.en}-${index}`
            const isFashion = a.title.en === 'Fashion Law'
            const PracticeAreaCard = () => {
              const cardRef = useScrollAnimation()
              const isLong = index >= AREAS.length - 2
              const cardClass = `card scroll-animate-up ${isFashion ? 'fashion-law' : ''} ${isLong ? 'long-content' : ''}`
              
              return (
                <article 
                  className={cardClass}
                  key={cardKey} 
                  ref={cardRef}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-body">
                    <div style={{display:'flex',alignItems:'center',gap:12, marginBottom:10}}>
                      <div style={{width:36,height:36,background:'#e5e7eb',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                          <path d={a.icon}/>
                        </svg>
                      </div>
                      <h3 style={{margin:0,fontSize:18,fontWeight:700,color:'var(--text)'}}>{a.title[lang]}</h3>
                    </div>
                    <p style={{margin:0,color:'var(--muted)',lineHeight:1.6}}>{a.desc[lang]}</p>
                  </div>
                </article>
              )
            }
            
            return <PracticeAreaCard key={cardKey} />
          })}
        </div>
        
        {/* Mobile Carousel */}
        <div className="areas-mobile">
          <div 
            className="mobile-carousel-wrapper swipeable-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`mobile-carousel-track ${isDragging ? 'dragging' : ''}`}
              style={{
                transform: `translateX(calc(${-currentAreaIndex * 100}% + ${dragOffset}px))`
              }}
            >
              {AREAS.map((area, index) => (
                <article key={`${area.title.en}-${index}`} className="card mobile-carousel-item practice-area-mobile-card">
                  <div className="card-body">
                    <div className="practice-area-mobile-header">
                      <div className="practice-area-mobile-icon">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                          <path d={area.icon}/>
                        </svg>
                      </div>
                      <h3 className="practice-area-mobile-title">
                        {area.title[lang]}
                      </h3>
                    </div>
                    <p className="practice-area-mobile-desc">
                      {area.desc[lang]}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <div className="mobile-carousel-dots">
            {AREAS.map((_, index) => (
              <button
                key={index}
                className={`mobile-carousel-dot ${index === currentAreaIndex ? 'active' : ''}`}
                onClick={() => setCurrentAreaIndex(index)}
                aria-label={`${lang === 'es' ? 'Ir al área' : 'Go to area'} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
