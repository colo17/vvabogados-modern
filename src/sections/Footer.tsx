import React from 'react'
import { useLanguage } from '../i18n'

export default function Footer(){
  const year = new Date().getFullYear()
  const { lang } = useLanguage()

  const copy = {
    es: {
      lead: 'Especialistas en Propiedad Intelectual. Marcas, patentes y derechos de autor.',
      sub: 'Protegemos ideas con estrategia, tecnología y cercanía.',
      cta: 'Agenda una consulta',
      areas: 'Áreas',
      contact: 'Contacto',
      address: 'Miraflores 1445 Of. 203',
      city: 'Montevideo — Uruguay',
      phone: 'Tel: (+598) 2603 0997',
      email: 'Email: vvabogados@vvabogados.com.uy',
      bottom: `© ${year} VV Abogados. Todos los derechos reservados.`,
      areasList: [
        'Registro de Marcas y Patentes',
        'Derechos de Autor',
        'Registro de Marca en Aduana',
        'Auditoría de Activos de PI',
        'Registro de Nombres de Dominio',
        'Protección de Variedades Vegetales',
        'Redacción de Contratos',
        'Asesoría Contenciosa en PI',
        'Combate a la Falsificación y Piratería',
        'Fashion Law',
        'Derecho Deportivo y PI en el Deporte',
      ]
    },
    en: {
      lead: 'Specialists in Intellectual Property. Trademarks, patents, and copyrights.',
      sub: 'We protect ideas with strategy, technology, and a personal touch.',
      cta: 'Book a consultation',
      areas: 'Practice areas',
      contact: 'Contact',
      address: 'Miraflores 1445 Of. 203',
      city: 'Montevideo — Uruguay',
      phone: 'Phone: (+598) 2603 0997',
      email: 'Email: vvabogados@vvabogados.com.uy',
      bottom: `© ${year} VV Abogados. All rights reserved.`,
      areasList: [
        'Trademark and Patent filing',
        'Copyrights',
        'Customs recordal',
        'IP assets due diligence',
        'Domain name registration',
        'Plant variety protection',
        'Contract drafting',
        'IP contentious advisory',
        'Anti-counterfeiting & anti-piracy',
        'Fashion Law',
        'Sports law & IP in sports',
      ]
    }
  } as const

  const t = copy[lang]
  const areasLeft = t.areasList.slice(0, 6)
  const areasRight = t.areasList.slice(6)
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-card footer-brand">
            <img src="/images/Logo Horizontal Blanco.png" alt="VV Abogados" height="28" />
            <p className="footer-lead">{t.lead}</p>
            <p className="footer-sub">{t.sub}</p>
            <div className="footer-actions">
              <a className="button" href="#contacto">{t.cta}</a>
            </div>
          </div>

          <div className="footer-card footer-areas">
            <div className="footer-heading">{t.areas}</div>
            <div className="footer-areas-grid">
              <ul className="footer-list">
                {areasLeft.map(item => <li key={item}>{item}</li>)}
              </ul>
              <ul className="footer-list">
                {areasRight.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="footer-card">
            <div className="footer-heading">{t.contact}</div>
            <ul className="footer-list">
              <li>{t.address}</li>
              <li>{t.city}</li>
              <li>{t.phone}</li>
              <li>{t.email}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <span>{t.bottom}</span>
            <div className="footer-social">
              <a href="mailto:vvabogados@vvabogados.com.uy" className="footer-social-link" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm0 12H4V8l8 5 8-5v10Z" />
                </svg>
              </a>
              <a href="https://wa.me/59826030997" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.52 3.48A11.77 11.77 0 0 0 12.05 0C5.55.02.3 5.27.31 11.77A11.66 11.66 0 0 0 1.7 17.1L0 24l6.05-1.64a11.73 11.73 0 0 0 5.99 1.63h.01c6.5-.01 11.75-5.26 11.76-11.76a11.67 11.67 0 0 0-3.29-8.75ZM12.05 21.3h-.01a9.6 9.6 0 0 1-4.89-1.34l-.35-.21-3.59.97.96-3.51-.23-.36a9.62 9.62 0 0 1-1.47-5.11C2.45 6.42 6.67 2.2 12.06 2.2a9.6 9.6 0 0 1 6.8 2.82 9.6 9.6 0 0 1 2.82 6.8c-.01 5.39-4.23 9.62-9.63 9.62Zm5.28-7.2c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.89 1.12-.16.19-.33.21-.62.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.7-1.61-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.46-.47-.64-.48h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.44 0 1.44 1.02 2.83 1.16 3.02.14.19 2 3.05 4.86 4.28.68.29 1.21.46 1.62.59.68.22 1.29.19 1.77.12.54-.08 1.7-.7 1.94-1.38.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.33Z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/vv-abogados/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/vv.abogados/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
