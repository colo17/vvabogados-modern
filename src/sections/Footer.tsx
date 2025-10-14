import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{marginBottom:12}}>
              <img src="/images/Logo Horizontal Blanco.png" alt="VV Abogados" height="28" />
            </div>
            <p style={{marginTop:12, maxWidth:420}}>Especialistas en Propiedad Intelectual. Marcas, patentes y derechos de autor.</p>
          </div>
          <div>
            <div style={{fontWeight:700, marginBottom:8}}>Áreas</div>
            <ul style={{margin:0,paddingLeft:18,lineHeight:2}}>
              <li>Marcas y patentes</li>
              <li>Derechos de autor</li>
              <li>Observancia aduanera</li>
            </ul>
          </div>
          <div>
            <div style={{fontWeight:700, marginBottom:8}}>Contacto</div>
            <div>Miraflores 1445 Of. 203</div>
            <div>Montevideo — Uruguay</div>
            <div style={{marginTop:8}}>Tel: (+598) 2603 0997</div>
            <div style={{marginTop:4}}>Email: veronicavanrell@vvabogados.com.uy</div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} VV Abogados. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
