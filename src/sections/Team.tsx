import React, { useState } from 'react'
import TeamModal from '../components/TeamModal'

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
}

const TEAM: TeamMember[] = [
  { 
    name: 'Dra. Verónica Vanrell', 
    role: 'Socia Directora — Propiedad Intelectual', 
    img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop',
    formation: 'Abogada egresada de la Facultad de Derecho de la República Oriental del Uruguay. Especialista en Propiedad Intelectual con más de 15 años de experiencia.',
    jobDescription: 'Lidera el departamento de Propiedad Intelectual, especializada en marcas, patentes y derechos de autor. Representa a clientes nacionales e internacionales en procedimientos de registro y litigios complejos.',
    secondRole: 'Fundadora y Directora General',
    secondJobDescription: 'Fundó VV Abogados con la visión de crear un estudio jurídico especializado en Propiedad Intelectual. Dirige la estrategia corporativa y mantiene relaciones con estudios internacionales para brindar servicios globales.',
    linkedinUrl: 'https://linkedin.com/in/veronica-vanrell'
  },
  { 
    name: 'Dr. Gumer Pérez', 
    role: 'Socio', 
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
    formation: 'Abogado egresado de la Facultad de Derecho de la República Oriental del Uruguay.',
    jobDescription: 'Couture decía: «Sin abogados no hay leyes, sin leyes no hay derecho, sin derecho no hay justicia y sin justicia no hay nada», el ejercicio de la abogacía es un pilar fundamental para el estado de derecho, defender los derechos de los ciudadanos y representarlos en situaciones legales de complejidad, es la forma de hacer justicia.',
    secondRole: 'Socio Fundador desde el 1ro de Diciembre de 2021',
    secondJobDescription: 'Aporta su vasta experiencia en derecho civil y comercial al estudio. Co-fundador desde diciembre de 2021, contribuye con su expertise en litigios complejos y desarrollo de nuevas áreas de práctica.',
    linkedinUrl: 'https://linkedin.com/in/gumer-perez'
  },
  { 
    name: 'Esc. Ximena Fossati', 
    role: 'Socia', 
    img: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=600&auto=format&fit=crop',
    formation: 'Escribana Pública egresada de la Facultad de Derecho de la República Oriental del Uruguay.',
    jobDescription: 'Especializada en derecho societario y comercial, brinda asesoramiento integral en constitución de empresas y contratos comerciales.',
    secondRole: 'Directora del Departamento Notarial',
    secondJobDescription: 'Lidera el área notarial del estudio, gestionando escrituraciones, poderes y documentación corporativa. Especialista en estructuras societarias complejas y reorganizaciones empresariales.',
    linkedinUrl: 'https://linkedin.com/in/ximena-fossati'
  },
  { 
    name: 'Cra. Yoanna Igoa', 
    role: 'Socia', 
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop',
    formation: 'Contadora Pública egresada de la Facultad de Ciencias Económicas y de Administración de la Universidad de la República.',
    jobDescription: 'Lidera el área contable y financiera del estudio, especializada en auditorías y asesoramiento tributario.',
    secondRole: 'Directora Financiera y de Compliance',
    secondJobDescription: 'Supervisa la gestión financiera integral del estudio y asegura el cumplimiento de normativas contables y tributarias. Desarrolla políticas de control interno y gestión de riesgos financieros.',
    linkedinUrl: 'https://linkedin.com/in/yoanna-igoa'
  },
  { 
    name: 'Ismael González', 
    role: 'Asociado Senior', 
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop',
    formation: 'Abogado egresado de la Facultad de Derecho de la República Oriental del Uruguay.',
    jobDescription: 'Especializado en derecho laboral y seguridad social, representa a empresas en negociaciones colectivas y litigios laborales.',
    secondRole: 'Coordinador del Área Laboral',
    secondJobDescription: 'Coordina el departamento de derecho laboral, brindando asesoramiento estratégico en relaciones laborales y diseño de políticas de RRHH. Especialista en prevención de conflictos laborales y compliance laboral.',
    linkedinUrl: 'https://linkedin.com/in/ismael-gonzalez'
  },
  { 
    name: 'Paolo Duce', 
    role: 'Asociado Senior', 
    img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=600&auto=format&fit=crop',
    formation: 'Abogado egresado de la Facultad de Derecho de la República Oriental del Uruguay.',
    jobDescription: 'Especializado en derecho civil y comercial, con amplia experiencia en contratos y responsabilidad civil.',
    linkedinUrl: 'https://linkedin.com/in/paolo-duce'
  },
  { 
    name: 'Juan Manuel Balsas', 
    role: 'Departamento de Propiedad Intelectual', 
    img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=600&auto=format&fit=crop',
    formation: 'Abogado especializado en Propiedad Intelectual, egresado de la Facultad de Derecho.',
    jobDescription: 'Maneja registros de marcas y patentes, realizando búsquedas de antecedentes y gestionando procedimientos administrativos.',
    linkedinUrl: 'https://linkedin.com/in/juan-manuel-balsas'
  },
  { 
    name: 'Ana Inés Gayon', 
    role: 'Departamento Internacional de PI', 
    img: 'https://images.unsplash.com/photo-1544005314-3bb76e34ef9b?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1544005314-3bb76e34ef9b?q=80&w=600&auto=format&fit=crop',
    formation: 'Abogada con especialización en Derecho Internacional y Propiedad Intelectual.',
    jobDescription: 'Coordina registros internacionales de marcas y patentes, maneja correspondencia con oficinas extranjeras.',
    linkedinUrl: 'https://linkedin.com/in/ana-ines-gayon'
  },
  { 
    name: 'Martina Brovia', 
    role: 'Departamento Jurídico', 
    img: 'https://images.unsplash.com/photo-1544005313-6e10a4526a30?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1544005313-6e10a4526a30?q=80&w=600&auto=format&fit=crop',
    formation: 'Abogada egresada de la Facultad de Derecho de la República Oriental del Uruguay.',
    jobDescription: 'Asistente legal especializada en investigación jurídica y redacción de documentos legales.',
    linkedinUrl: 'https://linkedin.com/in/martina-brovia'
  },
  { 
    name: 'Dra. María Laura Escudero', 
    role: 'Asociada — Propiedad Intelectual', 
    img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=600&auto=format&fit=crop',
    formation: 'Doctora en Derecho, especializada en Propiedad Intelectual y Derecho de la Competencia.',
    jobDescription: 'Asociada senior especializada en litigios complejos de propiedad intelectual y defensa de marcas.',
    linkedinUrl: 'https://linkedin.com/in/maria-laura-escudero'
  },
  { 
    name: 'Dr. Andrés Mendive', 
    role: 'Of Counsel', 
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=600&auto=format&fit=crop',
    formation: 'Doctor en Derecho con más de 20 años de experiencia en el ámbito jurídico.',
    jobDescription: 'Consultor senior que brinda asesoramiento estratégico en casos complejos y mentoreo al equipo junior.',
    linkedinUrl: 'https://linkedin.com/in/andres-mendive'
  },
  { 
    name: 'Cecilia Macias', 
    role: 'Ing. Química Farmacéutica', 
    img: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=600&auto=format&fit=crop',
    formation: 'Ingeniera Química Farmacéutica egresada de la Facultad de Química.',
    jobDescription: 'Especialista técnica en patentes farmacéuticas y químicas, realiza análisis de patentabilidad y redacción técnica.',
    linkedinUrl: 'https://linkedin.com/in/cecilia-macias'
  },
  { 
    name: 'Valentín Gadea', 
    role: 'Departamento de Patentes', 
    img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=600&auto=format&fit=crop',
    formation: 'Ingeniero especializado en Propiedad Intelectual y Patentes.',
    jobDescription: 'Analista técnico especializado en redacción y gestión de patentes de invención y modelos de utilidad.',
    linkedinUrl: 'https://linkedin.com/in/valentin-gadea'
  },
  { 
    name: 'Sofía Biatturi', 
    role: 'Comunicación — Redes Sociales', 
    img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=600&auto=format&fit=crop',
    formation: 'Licenciada en Comunicación Social con especialización en Marketing Digital.',
    jobDescription: 'Gestiona la presencia digital del estudio, desarrolla estrategias de contenido y maneja las redes sociales.',
    linkedinUrl: 'https://linkedin.com/in/sofia-biatturi'
  },
  { 
    name: 'Inés Etchandy', 
    role: 'Comunicación — Diseñadora Web', 
    img: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=800&auto=format&fit=crop',
    modalImg: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=600&auto=format&fit=crop',
    formation: 'Diseñadora Gráfica y Web con especialización en UX/UI Design.',
    jobDescription: 'Responsable del diseño web y gráfico del estudio, crea materiales visuales y mantiene la identidad corporativa.',
    linkedinUrl: 'https://linkedin.com/in/ines-etchandy'
  },
]

export default function Team(){
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const openModal = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <section id="equipo" className="section">
      <div className="container">
        <h2 className="section-title">Equipo</h2>
        <p className="section-desc">Contamos con un equipo de profesionales altamente capacitados y con una vasta experiencia tanto a nivel nacional como internacional en el ámbito de la Propiedad Intelectual. Esto, combinado con una estructura sólida, nos permite ofrecer servicios de la más alta calidad.</p>
        <div className="team-grid">
          {TEAM.map((p) => (
            <article 
              className="team-card" 
              key={p.name}
              onClick={() => openModal(p)}
              style={{ cursor: 'pointer' }}
            >
              <img className="team-img" src={p.img} alt={p.name} />
              <div className="team-overlay">
                <h3 className="team-name">{p.name}</h3>
                <p className="team-role">{p.role}</p>
                <span className="team-logo" aria-hidden>
                  <img src="/images/Isotipo Blanco.png" alt="" width="32" height="24" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <TeamModal 
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={closeModal}
      />
    </section>
  )
}
