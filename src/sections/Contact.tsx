import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../i18n'

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const sectionRef = useScrollAnimation()
  const { lang } = useLanguage()

  const copy = {
    es: {
      badge: 'Contacto',
      title: 'Contáctanos',
      desc: 'Ponte en contacto con nosotros, envianos un email y responderemos a la brevedad',
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      message: 'Mensaje',
      namePh: 'Tu nombre',
      emailPh: 'tu@email.com',
      phonePh: '(+598) 99 123 456',
      msgPh: 'Contanos brevemente tu consulta',
      submit: 'Enviar',
      sending: 'Enviando...',
      success: '¡Mensaje enviado exitosamente! Te responderemos a la brevedad.',
      error: 'Error al enviar el mensaje. Por favor, intenta nuevamente o contactanos directamente.',
      contactData: 'Datos de contacto',
      writeEmail: 'Escribir por email',
      whatsapp: 'Mandar WhatsApp'
    },
    en: {
      badge: 'Contact',
      title: 'Get in touch',
      desc: 'Reach out to us—send an email and we will reply shortly.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      message: 'Message',
      namePh: 'Your name',
      emailPh: 'you@email.com',
      phonePh: '(+598) 99 123 456',
      msgPh: 'Briefly tell us about your inquiry',
      submit: 'Send',
      sending: 'Sending...',
      success: 'Message sent successfully! We will get back to you shortly.',
      error: 'Error sending the message. Please try again or contact us directly.',
      contactData: 'Contact details',
      writeEmail: 'Send email',
      whatsapp: 'Send WhatsApp'
    }
  } as const
  const t = copy[lang]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'vvabogados@vvabogados.com.uy'
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )
      
      alert(t.success)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      alert(t.error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contacto" className="section scroll-animate-up" ref={sectionRef}>
      <div className="container grid cols-2">
        <div>
          <span className="badge">{t.badge}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className="section-desc">{t.desc}</p>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <label className="label">{t.name}</label>
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input" 
                  placeholder={t.namePh}
                  required
                />
                <label className="label" style={{marginTop:12}}>{t.email}</label>
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input" 
                  placeholder={t.emailPh}
                  required
                />
                <label className="label" style={{marginTop:12}}>{t.phone}</label>
                <input 
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input" 
                  placeholder={t.phonePh}
                />
                <label className="label" style={{marginTop:12}}>{t.message}</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input" 
                  placeholder={t.msgPh}
                  required
                />
                <div style={{marginTop:14}}>
                  <button className="button" type="submit" disabled={isLoading}>
                    {isLoading ? t.sending : t.submit}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="/images/Estudio.png" alt="VV Abogados" style={{opacity:0.7,filter:'saturate(0.85)',mixBlendMode:'multiply'}} />
          <div className="card-body">
            <h3 style={{marginTop:0}}>{t.contactData}</h3>
            <p style={{marginBottom:8,color:'#6b7a90'}}>vvabogados@vvabogados.com.uy</p>
            <p style={{marginBottom:8,color:'#6b7a90'}}>Tel: (+598) 2603 0997 / (+598) 94 519 555</p>
            <p style={{marginBottom:8,color:'#6b7a90'}}>Edificio Corporate – Miraflores 1445 – Of. 203, Montevideo, Carrasco.</p>
            <div style={{display:'flex', gap:'12px', flexWrap:'wrap'}}>
              <a className="button" href="mailto:vvabogados@vvabogados.com.uy">{t.writeEmail}</a>
              <a className="button button--whatsapp" href="https://wa.me/59894519555" target="_blank" rel="noopener noreferrer">{t.whatsapp}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
