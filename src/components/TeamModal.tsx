import React from 'react'
import { useLanguage } from '../i18n'

interface TeamMember {
  name: string
  role: string
  img: string
  modalImg: string
  formation: string
  jobDescription: string
  secondRole?: string
  secondJobDescription?: string
  linkedinUrl: string
   email?: string
}

interface TeamModalProps {
  member: TeamMember | null
  isOpen: boolean
  onClose: () => void
}

export default function TeamModal({ member, isOpen, onClose }: TeamModalProps) {
  if (!isOpen || !member) return null

  const { lang } = useLanguage()
  const copy = {
    es: {
      formation: 'FORMACIÓN',
      email: 'Enviar email'
    },
    en: {
      formation: 'EDUCATION',
      email: 'Send email'
    }
  } as const
  const t = copy[lang]

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Prevent body scroll when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
          &times;
        </button>
        
        <div className="modal-body">
          <div className="modal-header">
            <h2 className="modal-name">{member.name}</h2>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',alignItems:'center'}}>
              <span style={{fontWeight:600,color:'#6b7a90'}}>{member.role}</span>
            </div>
            <div style={{marginTop:6,color:'#0f1b2a',fontWeight:600}}>{member.email ?? 'vvabogados@vvabogados.com.uy'}</div>
          </div>

          <div className="modal-grid">
            <div className="modal-info">
              <div className="modal-section">
                <h3 className="modal-section-title">{t.formation}</h3>
                <p className="modal-section-desc">{member.formation}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">{member.role.toUpperCase()}</h3>
                <p className="modal-section-desc">{member.jobDescription}</p>
              </div>

              {member.secondRole && (
                <div className="modal-section">
                  <h3 className="modal-section-title">{member.secondRole.toUpperCase()}</h3>
                  <p className="modal-section-desc">{member.secondJobDescription}</p>
                </div>
              )}

              <div className="modal-social">
                <a 
                  href={member.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="modal-linkedin"
                  aria-label={lang === 'es' ? `Ver perfil de LinkedIn de ${member.name}` : `View ${member.name}'s LinkedIn profile`}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href={`mailto:${member.email ?? 'vvabogados@vvabogados.com.uy'}`}
                  className="button" 
                  style={{padding:'10px 14px',borderRadius:12,fontSize:14,background:'#0f1b2a',borderColor:'#0f1b2a'}}
                >
                  {t.email}
                </a>
              </div>
            </div>

            <div className="modal-image">
              <img src={member.modalImg} alt={member.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}