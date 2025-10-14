import React from 'react'

export default function About(){
  return (
    <section id="nosotros" className="section" style={{paddingTop:0}}>
      <div className="container grid cols-2">
        <div className="card">
          <img src="/images/equipo1.jpeg" alt="VV Abogados" />
        </div>
        <div>
          <span className="badge">Nosotros</span>
          <h2 className="section-title">Quiénes Somos</h2>
          <p className="section-desc">En VV ABOGADOS, nos enorgullece ofrecer servicios especializados en Propiedad Intelectual a nuestros clientes. Nuestro Departamento de PI ha sido diseñado con la misión de salvaguardar los valiosos activos intangibles confiados a nosotros, con una perspectiva integral y un enfoque único para cada cliente.</p>
          <ul style={{lineHeight:1.9, color:'#0f1b2a'}}>
            <li>Nuestros servicios: asesoría en marcas, patentes, derechos de autor, auditorías de PI, registro de dominios, protección de variedades vegetales, redacción de contratos, litigios de PI, combate de falsificación y gestión de registros en Aduanas de Uruguay.</li>
            <li>Tanto en Uruguay como en el extranjero: estamos comprometidos a ofrecer un servicio excepcional y personalizado a cada cliente.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
