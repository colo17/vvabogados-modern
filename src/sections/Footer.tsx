import React from 'react'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{display:'flex',alignItems:'center',gap:10,fontWeight:800}}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#c6a15b"/>
                <path d="M7 16L10.5 8H13.5L17 16H14.7L13.9 14H10.1L9.3 16H7Z" fill="#0b2a42"/>
              </svg>
              <span>VV Abogados</span>
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
