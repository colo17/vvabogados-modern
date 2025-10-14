import React from 'react'

export default function Hero(){
  return (
    <section className="hero">
      <span className="hero-ornament" />
      <div className="container hero-grid">
        <div>
          <h1>VV Abogados,Dra. Verónica Vanrell</h1>
          <p>Nuestro compromiso con la excelencia en la protección de la Propiedad Intelectual define cada uno de nuestros pasos. Abordamos cada desafío con determinación y pasión, convencidos de que salvaguardar los derechos intelectuales es fundamental para el triunfo de quienes dedican su creación, ingenio y esfuerzo.</p>
          <div className="hero-cta">
            <a href="#contacto" className="button">Agendar consulta</a>
            <a href="#areas" className="button button--ghost">Áreas de práctica</a>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h3 style={{marginTop:0, marginBottom:12}}>Consulta inicial sin costo</h3>
            <p style={{color:'#6b7a90'}}>¿Por qué nosotros?</p>
            <ul style={{margin:0, paddingLeft:18, lineHeight:1.9,color:'#0f1b2a'}}>
              <li>Nos especializamos en ofrecer soluciones integrales y personalizadas, adaptándonos a las necesidades específicas de cada cliente. Nuestra experiencia y dedicación nos permiten anticiparnos a los retos emergentes y garantizar una protección eficaz y eficiente de los derechos intelectuales.</li>
              <li>Elegirnos significa optar por un equipo comprometido con la excelencia, la innovación y la integridad en cada acción que emprendemos.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
