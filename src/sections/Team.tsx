import React from 'react'

const TEAM = [
  { name: 'Dra. Verónica Vanrell', role: 'Socia Directora — Propiedad Intelectual', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. Gumer Pérez', role: 'Socio', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' },
  { name: 'Esc. Ximena Fossati', role: 'Socia', img: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=800&auto=format&fit=crop' },
  { name: 'Cra. Yoanna Igoa', role: 'Socia', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' },
  { name: 'Ismael González', role: 'Asociado Senior', img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop' },
  { name: 'Paolo Duce', role: 'Asociado Senior', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop' },
  { name: 'Juan Manuel Balsas', role: 'Departamento de Propiedad Intelectual', img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop' },
  { name: 'Ana Inés Gayon', role: 'Departamento Internacional de PI', img: 'https://images.unsplash.com/photo-1544005314-3bb76e34ef9b?q=80&w=800&auto=format&fit=crop' },
  { name: 'Martina Brovia', role: 'Departamento Jurídico', img: 'https://images.unsplash.com/photo-1544005313-6e10a4526a30?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dra. María Laura Escudero', role: 'Asociada — Propiedad Intelectual', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=800&auto=format&fit=crop' },
  { name: 'Dr. Andrés Mendive', role: 'Of Counsel', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop' },
  { name: 'Cecilia Macias', role: 'Ing. Química Farmacéutica', img: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?q=80&w=800&auto=format&fit=crop' },
  { name: 'Valentín Gadea', role: 'Departamento de Patentes', img: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop' },
  { name: 'Sofía Biatturi', role: 'Comunicación — Redes Sociales', img: 'https://images.unsplash.com/photo-1545996124-0501ebae84d5?q=80&w=800&auto=format&fit=crop' },
  { name: 'Inés Etchandy', role: 'Comunicación — Diseñadora Web', img: 'https://images.unsplash.com/photo-1525130413817-d45c1d127c42?q=80&w=800&auto=format&fit=crop' },
]

export default function Team(){
  return (
    <section id="equipo" className="section">
      <div className="container">
        <h2 className="section-title">Equipo</h2>
        <p className="section-desc">Contamos con un equipo de profesionales altamente capacitados y con una vasta experiencia tanto a nivel nacional como internacional en el ámbito de la Propiedad Intelectual. Esto, combinado con una estructura sólida, nos permite ofrecer servicios de la más alta calidad.</p>
        <div className="team-grid">
          {TEAM.map((p) => (
            <article className="team-card" key={p.name}>
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
    </section>
  )
}
