import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../i18n'

const NEWS = {
  es: [
    { title: 'Estuvimos en ASIPI Buenos Aires', date: '2025-10-12', url: 'https://www.instagram.com/p/DSCo2J6kZvG/' },
    { title: 'Newsletter 01', date: '2025-10-12', url: 'https://www.instagram.com/p/DNilYMgOzN6/?utm_source=ig_web_copy_link' },
    { title: 'Jornada de Derecho y Moda', date: '2025-10-12', url: 'https://www.instagram.com/p/DPXOq5skpXS/?utm_source=ig_web_copy_link' },
    { title: 'Estuvimos en Inta', date: '2025-10-12', url: 'https://www.instagram.com/reel/DKR04h2OCgo/?utm_source=ig_web_copy_link' },
  ],
  en: [
    { title: 'We attended ASIPI Buenos Aires', date: '2025-10-12', url: 'https://www.instagram.com/p/DSCo2J6kZvG/' },
    { title: 'Newsletter 01', date: '2025-10-12', url: 'https://www.instagram.com/p/DNilYMgOzN6/?utm_source=ig_web_copy_link' },
    { title: 'Fashion Law Day', date: '2025-10-12', url: 'https://www.instagram.com/p/DPXOq5skpXS/?utm_source=ig_web_copy_link' },
    { title: 'We were at INTA', date: '2025-10-12', url: 'https://www.instagram.com/reel/DKR04h2OCgo/?utm_source=ig_web_copy_link' },
  ]
} as const

const TESTIMONIALS = {
  es: [
    { quote: 'Excelente trato y orientación clara en cada etapa del proceso de registro.', name: 'Cliente del sector tech', loc: 'Montevideo, UY' },
    { quote: 'Nos guiaron con plazos y costos de forma transparente. Resultado impecable.', name: 'Emprendimiento de e‑commerce', loc: 'Canelones, UY' },
    { quote: 'Equipo muy profesional y ágil. Recomendamos su servicio de marcas.', name: 'Estudio de diseño', loc: 'Punta del Este, UY' }
  ],
  en: [
    { quote: 'Excellent guidance and clear direction at every stage of filing.', name: 'Tech sector client', loc: 'Montevideo, UY' },
    { quote: 'They walked us through timing and costs transparently. Impeccable result.', name: 'E-commerce venture', loc: 'Canelones, UY' },
    { quote: 'Very professional and agile team. We recommend their trademark service.', name: 'Design studio', loc: 'Punta del Este, UY' }
  ]
} as const

export default function TestimonialsNews(){
  const sectionRef = useScrollAnimation()
  const { lang } = useLanguage()
  const tBadge = lang === 'es' ? { test: 'Testimonios', news: 'Noticias' } : { test: 'Testimonials', news: 'News' }
  const tTitle = lang === 'es' ? { test: 'Casos de Éxito', news: 'Actualidad' } : { test: 'Success Stories', news: 'Updates' }
  const testimonials = TESTIMONIALS[lang]
  const news = NEWS[lang]
  
  return (
    <section id="noticias" className="section scroll-animate" style={{paddingTop:0}} ref={sectionRef}>
      <div className="container grid cols-2">
        <div>
          <span className="badge">{tBadge.test}</span>
          <h2 className="section-title">{tTitle.test}</h2>
          <div className="grid">
            {testimonials.map((t, i) => (
              <div className="card" key={i}>
                <div className="card-body">
                  <p style={{fontSize:18, marginTop:0}}>
                    “{t.quote}”
                  </p>
                  <div style={{display:'flex',alignItems:'center',gap:12}}>
                    <div style={{width:40,height:40,borderRadius:999,background:'#e8eef6'}}/>
                    <div>
                      <div style={{fontWeight:700}}>{t.name}</div>
                      <div style={{color:'#6b7a90',fontSize:14}}>{t.loc}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <span className="badge">{tBadge.news}</span>
          <h2 className="section-title">{tTitle.news}</h2>
          <div className="grid">
            {news.map(n => (
              <a className="card--clickable" href={n.url} key={n.title} target="_blank" rel="noreferrer">
                <div className="card-body">
                  <div style={{fontSize:14,color:'#6b7a90'}}>{new Date(n.date).toLocaleDateString(lang === 'es' ? 'es-UY' : 'en-US')}</div>
                  <h3 style={{margin:'6px 0 0'}}>{n.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
