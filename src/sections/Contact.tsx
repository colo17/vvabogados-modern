import React from 'react'

export default function Contact(){
  return (
    <section id="contacto" className="section">
      <div className="container grid cols-2">
        <div>
          <span className="badge">Contacto</span>
          <h2 className="section-title">Hablemos de tu proyecto</h2>
          <p className="section-desc">Edificio Corporate – Miraflores 1445 – Of. 203, Montevideo, Carrasco.<br/>Tel: (+598) 2603 0997 / (+598) 94 519 555<br/>Email: veronicavanrell@vvabogados.com.uy</p>
          <div className="card">
            <div className="card-body">
              <form onSubmit={(e)=>{e.preventDefault(); alert('¡Gracias! Te responderemos a la brevedad.')}}>
                <label className="label">Nombre</label>
                <input className="input" placeholder="Tu nombre" required/>
                <label className="label" style={{marginTop:12}}>Email</label>
                <input type="email" className="input" placeholder="tu@email.com" required/>
                <label className="label" style={{marginTop:12}}>Mensaje</label>
                <textarea className="input" placeholder="Contanos brevemente tu consulta" required/>
                <div style={{marginTop:14}}><button className="button" type="submit">Enviar</button></div>
              </form>
            </div>
          </div>
        </div>
        <div className="card">
          <img src="https://images.unsplash.com/photo-1416339442236-8ceb164046f8?q=80&w=1200&auto=format&fit=crop" alt="Oficina" />
          <div className="card-body">
            <h3 style={{marginTop:0}}>Datos de contacto</h3>
            <p style={{marginBottom:8,color:'#6b7a90'}}>veronicavanrell@vvabogados.com.uy</p>
            <a className="button" href="mailto:veronicavanrell@vvabogados.com.uy">Escribir por email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
