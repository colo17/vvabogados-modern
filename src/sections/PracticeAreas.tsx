import React from 'react'

const AREAS = [
  {
    title: 'Registro de Marcas y Patentes',
    desc: 'Ambos registros aseguran que los derechos de propiedad intelectual sean reconocidos y protegidos legalmente, fortaleciendo la posición en el mercado y facilitando la defensa contra infracciones.',
    icon: 'M5 12h14M12 5v14'
  },
  {
    title: 'Derechos de Autor',
    desc: 'El servicio de protección del derecho de autor se encarga de resguardar las creaciones originales de una persona, como obras literarias, artísticas, musicales o científicas, contra el uso no autorizado.',
    icon: 'M4 8h16M4 16h10'
  },
  {
    title: 'Registro de Marca en Aduana',
    desc: 'Al registrar una marca en aduana, se facilita la vigilancia y el control sobre productos importados y exportados, garantizando que solo los productos genuinos sean comercializados, y se ayuda a prevenir la entrada de falsificaciones al mercado.',
    icon: 'M12 2l3 7h7l-5.5 4 2.1 7L12 16 5.4 20 7.5 13 2 9h7z'
  },
  {
    title: 'Auditoría de Activos de PI',
    desc: 'El servicio de auditoría o due diligence sobre activos de propiedad intelectual evalúa y verifica el estado, valor y legalidad de los activos intangibles de una empresa, como marcas, patentes, derechos de autor y secretos comerciales.',
    icon: 'M3 12h18M3 8h12M3 16h8'
  },
  {
    title: 'Registro de Nombres de Dominio',
    desc: 'El servicio de registro de nombres de dominio facilita la adquisición y administración de direcciones web para una empresa o individuo.',
    icon: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z'
  },
  {
    title: 'Protección de Variedades Vegetales',
    desc: 'El servicio de protección de variedades vegetales asegura los derechos exclusivos sobre nuevas variedades de plantas, protegiendo las innovaciones en la agricultura y horticultura.',
    icon: 'M12 2v20M2 12h20M7 7l10 10M17 7L7 17'
  },
  {
    title: 'Redacción de Contratos',
    desc: 'El servicio de redacción de contratos se encarga de crear documentos legales que formalizan acuerdos entre partes y regulan sus derechos y obligaciones.',
    icon: 'M4 4h16v16H4z M8 8h8M8 12h8M8 16h6'
  },
  {
    title: 'Asesoría Contenciosa en PI',
    desc: 'El servicio de asesoramiento en materia contenciosa para la protección de los derechos de propiedad intelectual ofrece apoyo legal especializado en la resolución de disputas relacionadas con activos intangibles.',
    icon: 'M5 12l5 5L19 7'
  },
  {
    title: 'Combate a la Falsificación y Piratería',
    desc: 'El servicio de combate a la falsificación y piratería se enfoca en proteger los activos de propiedad intelectual de una empresa contra la producción y distribución ilegal de productos falsificados o pirateados.',
    icon: 'M2 12h20M12 2v20'
  },
  {
    title: 'Fashion Law',
    desc: 'Este servicio se centra en proteger la propiedad intelectual en la industria de la moda, como marcas y diseños, y en la redacción de contratos para acuerdos de licencia y distribución. También aborda los derechos laborales para asegurar condiciones justas para los trabajadores y gestiona los aspectos legales de la exportación e importación, garantizando el cumplimiento de normativas y la protección contra falsificaciones.',
    icon: 'M6 20l6-16 6 16M8 14h8'
  },
]

function Icon({ d }:{ d:string }){
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c6a15b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d}/>
    </svg>
  )
}

export default function PracticeAreas(){
  return (
    <section id="areas" className="section">
      <div className="container">
        <h2 className="section-title">Áreas de práctica</h2>
        <p className="section-desc">Servicios prestados en Uruguay y mediante una red de corresponsales en el exterior.</p>
        <div className="grid cols-3">
          {AREAS.map((a) => (
            <article className="card" key={a.title}>
              <div className="card-body">
                <div style={{display:'flex',alignItems:'center',gap:12, marginBottom:10}}>
                  <Icon d={a.icon} />
                  <h3 style={{margin:0}}>{a.title}</h3>
                </div>
                <p style={{margin:0,color:'#6b7a90'}}>{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
