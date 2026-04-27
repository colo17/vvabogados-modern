import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import TeamModal from '../components/TeamModal'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useLanguage } from '../i18n'

type Lang = 'es' | 'en'

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
  imageStyle?: React.CSSProperties
}

const TEAM: Record<Lang, TeamMember[]> = {
  es: [
    { 
      name: 'Dra. Verónica Vanrell', 
      role: 'Socia Directora', 
      img: '/images/VeroVanrell1.jpg',
      modalImg: '/images/VeroVanrell2.jpg',
      formation: 'Abogada egresada de la Facultad de Derecho de la Universidad de la República. Agente de marcas.',
      jobDescription: 'La pasión por lo que hago me impulsa en cada acción que emprendo. Creo firmemente que proteger la propiedad intelectual es un paso esencial hacia el éxito para aquellos que invierten su tiempo, esfuerzo y creatividad.',
      secondRole: 'Socia Directora de GP ABOGADOS',
      secondJobDescription: 'Socia directora desde el 1ro de Diciembre del 2021.',
      linkedinUrl: 'https://www.linkedin.com/in/veronica-vanrell-87863799/',
      email: 'veronicavanrell@vvabogados.com.uy'
    },
    { 
      name: 'Dr. Gumer Pérez', 
      role: 'Socio', 
      img: '/images/gumerNueva.jpg',
      modalImg: '/images/GumerPerez2.jpg',
      formation: 'Abogado egresado de la Facultad de Derecho de la República Oriental del Uruguay.',
      jobDescription: 'Couture decía: «Sin abogados no hay leyes, sin leyes no hay derecho, sin derecho no hay justicia y sin justicia no hay nada», el ejercicio de la abogacía es un pilar fundamental para el estado de derecho, defender los derechos de los ciudadanos y representarlos en situaciones legales de complejidad, es la forma de hacer justicia.',
      secondRole: 'Socio de GP ABOGADOS',
      secondJobDescription: 'Socio fundador desde el 1ro de Diciembre de 2021.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'gumerperez@vvabogados.com.uy'
    },
    { 
      name: 'Esc. Ximena Fossati', 
      role: 'Socia', 
      img: '/images/XimeFossati1.jpg',
      modalImg: '/images/XimeFossati2.jpg',
      formation: 'Escribana egresada de la Facultad de Derecho de la República Oriental del Uruguay.',
      jobDescription: 'Desde mi rol de escribana, busco generar un espacio de escucha e intercambio personalizado con cada cliente para poder encontrar juntos la mejor solución ante un eventual problema, siempre velando por la seguridad jurídica a la hora de proteger sus intereses.',
      secondRole: 'Asociada de GP ABOGADOS',
      secondJobDescription: 'Asociada desde el 1ro de Diciembre del 2021.',
      linkedinUrl: 'https://www.linkedin.com/in/ximena-fossati-crosta-357a26a9/',
      email: 'ximenafossati@vvabogados.com.uy'
    },
    { 
      name: 'Cra. Yoanna Igoa', 
      role: 'Socia', 
      img: '/images/YoannaIgoa1.jpg',
      modalImg: '/images/YoannaIgoa2.jpg',
      formation: 'Contadora egresada de la Universidad ORT Uruguay.',
      jobDescription: 'Como contadora cuento con un enfoque único en la protección y gestión de activos intangibles. Mi objetivo es brindarte asesoramiento experto para proteger tus creaciones, innovaciones y marcas comerciales de manera eficiente y rentable.',
      secondRole: 'Asociada de GP ABOGADOS',
      secondJobDescription: 'Asociada desde el 1ro de Diciembre del 2021.',
      linkedinUrl: 'https://www.linkedin.com/in/yoanna-igoa-43b7528/',
      email: 'yoannaigoa@vvabogados.com.uy'
    },
    { 
      name: 'Juan Manuel Balsas Vanrell', 
      role: 'Departamento de PI', 
      img: '/images/JuanmaBalsas1.jpg',
      modalImg: '/images/JuanmaBalsas.jpg',
      formation: 'Estudiante de la Facultad de Derecho de la República Oriental del Uruguay.',
      jobDescription: 'Desempeño mi trabajo en el departamento de propiedad intelectual, incursionando a diario en nuevos desafíos adquiriendo experiencia en los aspectos emergentes de la misma, con el fin de especializar mi perfil profesional de cara al futuro.',
      linkedinUrl: 'https://www.linkedin.com/in/juan-manuel-balsas-vanrell-451965307/',
      email: 'juanmanuelbalsas@vvabogados.com.uy',
      imageStyle: { objectPosition: 'center 0%' }
    },
    { 
      name: 'Luciano Hernandez Rodal', 
      role: 'Departamento Jurídico', 
      img: '/images/LuloRodal1.jpg',
      modalImg: '/images/LuloRodal2.jpg',
      formation: 'Abogado en la Univerdad Catolica del Uruguay.',
      jobDescription: 'Soy un abogado penalista convencido de que la defensa no es solo un ejercicio técnico, sino también un compromiso humano. Me defino por la disciplina en el estudio, la estrategia en cada caso y la firmeza frente a la adversidad, pero también por la empatía hacia las personas que confían en mí cuando todo parece estar en contra. Creo en la justicia como un camino de lucha constante: con ética, con convicción y con respeto por la dignidad de cada ser humano.',
      linkedinUrl: 'https://www.linkedin.com/in/luciano-rodal-229744233/',
      email: 'lucianohernandez@vvabogados.com.uy'
    },
    { 
      name: 'Ana Inés Gayon', 
      role: 'Departamento de PI / Traductora', 
      img: '/images/AnaInesGayon1.jpg',
      modalImg: '/images/AnaInesGayon2.jpg',
      formation: 'Profesional con trayectoria en marketing y traductorado de Francés, con experiencia en hotelería y contacto con clientes de diversos sectores.',
      jobDescription: 'Aporto una mirada interdisciplinaria en propiedad intelectual: conecto marcas y patentes con estrategia de comunicación y traducciones especializadas para asegurar claridad y alcance internacional.',
      linkedinUrl: 'https://www.linkedin.com/in/anain%C3%A9sgay%C3%B3n/',
      email: 'anainesgayon@vvabogados.com.uy'
    },
    { 
      name: 'Martina Brovia', 
      role: 'Departamento Jurídico', 
      img: '/images/MartiBrovia1.jpg',
      modalImg: '/images/MartiBrovia2.jpg',
      formation: 'Estudiante de la Facultad de Derecho de la República Oriental del Uruguay.',
      jobDescription: 'Mi formación académica en Derecho me permite estar en constante aprendizaje y actualización de las normativas legales vigentes. En mi rol como procuradora, gestiono diligentemente los trámites judiciales y administrativos, asegurando que cada proceso se realice de manera eficiente y oportuna.',
      linkedinUrl: 'https://www.linkedin.com/in/martina-brovia-goday-966973256/',
      email: 'martinabrovia@vvabogados.com.uy'
    },
    { 
      name: 'Guillermina Balsas Vanrell', 
      role: 'Departamento de PI', 
      img: '/images/GuilleBalsas1.jpg',
      modalImg: '/images/GuilleBalsas2.jpg',
      formation: 'Estudiante avanzada de la Facultad de Derecho de la Universidad de la República.',
      jobDescription: 'Integro el departamento de propiedad intelectual apoyando la preparación de búsquedas, solicitudes y renovaciones de marcas, procurando una comunicación cercana con nuestros clientes emprendedores y pymes.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'guillerminabalsas@vvabogados.com.uy'
    },
    { 
      name: 'Sofía Biatturi', 
      role: 'Departamento de Comunicación', 
      img: '/images/SofiBiatturi1.jpg',
      modalImg: '/images/SofiBiatturi2.jpg',
      formation: 'Estudiante de Derecho en la Universidad Católica del Uruguay.',
      jobDescription: 'Como estudiante de derecho apasionada por la comunicación, me entusiasma formar parte de este estudio jurídico especializado en propiedad intelectual, donde puedo fusionar mi amor por la ley y mi interés por la creación y protección de contenido único y creativo.',
      linkedinUrl: 'https://www.linkedin.com/in/sof%C3%ADa-biatturi-80287122a/',
      email: 'sofiabiatturi@vvabogados.com.uy'
    },
    { 
      name: 'Delfina Lacasa', 
      role: 'Departamento Jurídico', 
      img: '/images/DelfiLacasa1.jpg',
      modalImg: '/images/DelfiLacasa2.jpg',
      formation: 'Estudiante de la Facultad de Derecho de la Universidad Católica del Uruguay.',
      jobDescription: 'Acompaño al equipo jurídico en el seguimiento de expedientes, la redacción de escritos y la coordinación de gestiones administrativas para brindar respuestas ágiles y personalizadas.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'delfinalacasa@vvabogados.com.uy'
    },
    { 
      name: 'Agustín Gorla Félix', 
      role: 'Departamento Notarial e Inmobiliario', 
      img: '/images/AgusGorla1.jpg',
      modalImg: '/images/AgusGorla2.jpg',
      formation: 'Estudiante de la Facultad de Derecho de la República Oriental del Uruguay.',
      jobDescription: 'Desempeño mi trabajo en el Departamento Notarial e Inmobiliario, donde día a día reafirmo la importancia de la seguridad jurídica que consagra la labor notarial, debiéndose entender como una inversión en tranquilidad y certeza jurídica respecto de los actos y derechos a los que se pone forma y autenticidad. Mi objetivo siempre será obtener la confianza del cliente por mérito de haberle entregado un asesoramiento integral y una labor eficaz, sagaz y providente.',
      linkedinUrl: 'https://www.linkedin.com/in/agust%C3%ADn-gorla-f%C3%A9lix-193633356/',
      email: 'agustingorla@vvabogados.com.uy'
    },
    { 
      name: 'Dra. María Laura Escudero', 
      role: 'Asociada de PI', 
      img: '/images/MariaLauraEscudero.jpg',
      modalImg: '/images/MariaLauraEscudero2.jpg',
      formation: 'Egresada de la Maestría en Derecho Empresarial de la Universidad de Montevideo (2020). En el año 2019 cursó Program on Negotiation at Harvard Law School.',
      jobDescription: 'Asesora a clientes en negociación y resolución de controversias comerciales, civiles y laborales, con enfoque en soluciones de propiedad intelectual y acuerdos preventivos.',
      linkedinUrl: 'https://www.linkedin.com/in/mar%C3%ADalauraescudero/',
      email: 'marialauraescudero@vvabogados.com.uy'
    },
    { 
      name: 'Federico Pérez del Castillo', 
      role: 'Asociado de PI', 
      img: '/images/perezDelCastilloFondoGris.jpg',
      modalImg: '/images/perezDelCastilloconFondo.jpg',
      formation: 'Abogado especializado en propiedad intelectual y acuerdos comerciales.',
      jobDescription: 'Impulsa estrategias de PI y contratos vinculados a licencias y transferencia de tecnología, conectando innovación y negocio.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'federicoperezdelcastillo@vvabogados.com.uy'
    },
    { 
      name: 'Álvaro da Silva', 
      role: 'Asociado de PI', 
      img: '/images/AlvaroDaSilvaFondoGris.jpg',
      modalImg: '/images/alvaromartindasilvafondo.jpg',
      formation: 'Abogado con experiencia en litigios, arbitraje y asesoramiento empresarial.',
      jobDescription: 'Integra el equipo de PI colaborando en estrategias de observancia, acuerdos y resolución de disputas vinculadas a intangibles.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'alvarodasilva@vvabogados.com.uy'
    },
    { 
      name: 'Ximena Araujo', 
      role: 'Departamento Jurídico', 
      img: '/images/XimenaAraujo.jpg',
      modalImg: '/images/XimenaAraujo.jpg',
      formation: 'Profesional del área jurídica enfocada en la gestión operativa y el acompañamiento a clientes.',
      jobDescription: 'Articula gestiones judiciales y administrativas, asegurando seguimiento cercano y respuestas claras para los clientes del estudio.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'ximenaaraujo@vvabogados.com.uy'
    },
    { 
      name: 'María Eugenia Leoni', 
      role: 'Departamento Jurídico y PI', 
      img: '/images/mariaeugenialeoni.png',
      modalImg: '/images/mariaeugenialeoni.png',
      formation: 'Abogada y Escribana egresada de la Facultad de Derecho de la Universidad de la República.',
      jobDescription: 'Detrás de cada caso hay una realidad concreta. Mi compromiso es abordarlo de manera integral y humana, combinando herramientas jurídicas y notariales para dar respuestas claras, sólidas y efectivas.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/'
    },
    { 
      name: 'Facundo Chirico', 
      role: 'Departamento Jurídico', 
      img: '/images/FacundoChirico1.png',
      modalImg: '/images/FacundoChirico2.jpeg',
      formation: 'Estudiante de la Facultad de Derecho de la República Oriental del Uruguay.',
      jobDescription: 'Mi formación académica en Derecho se ve altamente potenciada al estar en continuo contacto con juzgados, procesos y clientes. Comprometido con los clientes, me encargo de procurar cada caso optimizando los tiempos y cumpliendo con ellos providentemente.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/'
    },
    { 
      name: 'Ing. Cecilia Macias', 
      role: 'Consultora en Regulaciones', 
      img: '/images/CeciliaMacias.jpg',
      modalImg: '/images/CeciliaMacias.jpg',
      formation: 'Graduada en 2016 como química farmacéutica, he trabajado en diversas áreas de la industria farmacéutica desde 2014, incluyendo control de calidad, aseguramiento de calidad y dirección técnica.',
      jobDescription: 'Mi formación en química farmacéutica y mi experiencia en control y aseguramiento de calidad me han proporcionado habilidades precisas y un enfoque detallado que aporto al estudio jurídico en propiedad intelectual, asegurando una gestión rigurosa y eficiente de los derechos y regulaciones.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'ceciliamacias@vvabogados.com.uy'
    },
    { 
      name: 'Valentín Gadea', 
      role: 'Departamento de Patentes', 
      img: '/images/ValentinGadea.jpg',
      modalImg: '/images/ValentinGadea.jpg',
      formation: 'Actualmente, estoy cursando la carrera de Biotecnología en la Universidad ORT Uruguay, donde he desarrollado un profundo interés en la innovación científica y tecnológica.',
      jobDescription: 'Mi rol implica colaborar en la gestión y aseguramiento de patentes, un proceso clave para proteger las invenciones y fomentar la innovación.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'valentingadea@vvabogados.com.uy'
    },
    { 
      name: 'Dr. Andrés Mendive', 
      role: 'Of Counsel', 
      img: '/images/AndresMendive.jpg',
      modalImg: '/images/AndresMendive.jpg',
      formation: 'Abogado egresado de la Facultad de Derecho de la República Oriental del Uruguay.',
      jobDescription: 'Asesoramiento especializado, mentoría y formación.',
      linkedinUrl: 'https://www.linkedin.com/in/andr%C3%A9s-mendive-dubourdieu-204b8423/',
      email: 'andresmendive@vvabogados.com.uy'
    },
  ],
  en: [
    { 
      name: 'Dra. Verónica Vanrell', 
      role: 'Managing Partner', 
      img: '/images/VeroVanrell1.jpg',
      modalImg: '/images/VeroVanrell2.jpg',
      formation: 'Attorney, School of Law, Universidad de la República. Trademark agent.',
      jobDescription: 'Passion drives every action I take. I firmly believe that protecting intellectual property is essential for the success of those who invest their time, effort, and creativity.',
      secondRole: 'Managing Partner, GP ABOGADOS',
      secondJobDescription: 'Managing partner since December 1st, 2021.',
      linkedinUrl: 'https://www.linkedin.com/in/veronica-vanrell-87863799/',
      email: 'veronicavanrell@vvabogados.com.uy'
    },
    { 
      name: 'Dr. Gumer Pérez', 
      role: 'Partner', 
      img: '/images/gumerNueva.jpg',
      modalImg: '/images/GumerPerez2.jpg',
      formation: 'Attorney, School of Law, República Oriental del Uruguay.',
      jobDescription: 'Couture said: “Without lawyers there are no laws; without laws there is no right; without right there is no justice; without justice there is nothing.” Practicing law is a pillar of the rule of law—defending citizens’ rights and representing them in complex legal matters is how we deliver justice.',
      secondRole: 'Partner at GP ABOGADOS',
      secondJobDescription: 'Founding partner since December 1st, 2021.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'gumerperez@vvabogados.com.uy'
    },
    { 
      name: 'Esc. Ximena Fossati', 
      role: 'Partner', 
      img: '/images/XimeFossati1.jpg',
      modalImg: '/images/XimeFossati2.jpg',
      formation: 'Notary public, School of Law, República Oriental del Uruguay.',
      jobDescription: 'As a notary, I strive to create a space for attentive listening and tailored dialogue with every client to find the best solution together, always ensuring legal certainty to protect their interests.',
      secondRole: 'Associate at GP ABOGADOS',
      secondJobDescription: 'Associate since December 1st, 2021.',
      linkedinUrl: 'https://www.linkedin.com/in/ximena-fossati-crosta-357a26a9/',
      email: 'ximenafossati@vvabogados.com.uy'
    },
    { 
      name: 'Cra. Yoanna Igoa', 
      role: 'Partner', 
      img: '/images/YoannaIgoa1.jpg',
      modalImg: '/images/YoannaIgoa2.jpg',
      formation: 'Certified Public Accountant, Universidad ORT Uruguay.',
      jobDescription: 'As an accountant I bring a unique focus to protecting and managing intangible assets. My goal is to deliver expert advice to safeguard creations, innovations, and trademarks efficiently and cost-effectively.',
      secondRole: 'Associate at GP ABOGADOS',
      secondJobDescription: 'Associate since December 1st, 2021.',
      linkedinUrl: 'https://www.linkedin.com/in/yoanna-igoa-43b7528/',
      email: 'yoannaigoa@vvabogados.com.uy'
    },
    { 
      name: 'Juan Manuel Balsas Vanrell', 
      role: 'IP Department', 
      img: '/images/JuanmaBalsas1.jpg',
      modalImg: '/images/JuanmaBalsas.jpg',
      formation: 'Law student, Universidad de la República.',
      jobDescription: 'I work in the IP department, facing new challenges daily and gaining experience in emerging IP matters to sharpen my professional profile.',
      linkedinUrl: 'https://www.linkedin.com/in/juan-manuel-balsas-vanrell-451965307/',
      email: 'juanmanuelbalsas@vvabogados.com.uy',
      imageStyle: { objectPosition: 'center 0%' }
    },
    { 
      name: 'Luciano Hernandez Rodal', 
      role: 'Legal Department', 
      img: '/images/LuloRodal1.jpg',
      modalImg: '/images/LuloRodal2.jpg',
      formation: 'Lawyer, Universidad de Montevideo.',
      jobDescription: 'I am a criminal defense attorney convinced that defense is not just a technical exercise, but also a human commitment. I am defined by my disciplined study, strategic approach to each case, and unwavering resolve in the face of adversity, but also by my empathy for those who place their trust in me when everything seems to be against them. I believe in justice as a path of constant struggle: with ethics, conviction, and respect for the dignity of every human being.',
      linkedinUrl: 'https://www.linkedin.com/in/luciano-rodal-229744233/',
      email: 'lucianohernandez@vvabogados.com.uy'
    },
    { 
      name: 'Ana Inés Gayon', 
      role: 'IP Department / Translator', 
      img: '/images/AnaInesGayon1.jpg',
      modalImg: '/images/AnaInesGayon2.jpg',
      formation: 'Background in marketing and French translation, with experience in hospitality and client-facing roles across sectors.',
      jobDescription: 'I bring an interdisciplinary view to IP: connecting trademarks and patents with communication strategy and specialized translations to ensure clarity and international reach.',
      linkedinUrl: 'https://www.linkedin.com/in/anain%C3%A9sgay%C3%B3n/',
      email: 'anainesgayon@vvabogados.com.uy'
    },
    { 
      name: 'Martina Brovia', 
      role: 'Legal Department', 
      img: '/images/MartiBrovia1.jpg',
      modalImg: '/images/MartiBrovia2.jpg',
      formation: 'Law student, Universidad de la República.',
      jobDescription: 'My legal studies keep me learning and current on regulations. As a legal assistant, I diligently handle judicial and administrative filings to keep every process timely.',
      linkedinUrl: 'https://www.linkedin.com/in/martina-brovia-goday-966973256/',
      email: 'martinabrovia@vvabogados.com.uy'
    },
    { 
      name: 'Guillermina Balsas Vanrell', 
      role: 'IP Department', 
      img: '/images/GuilleBalsas1.jpg',
      modalImg: '/images/GuilleBalsas2.jpg',
      formation: 'Advanced law student, Universidad de la República.',
      jobDescription: 'I support the IP team with searches, filings, and renewals, keeping close communication with our entrepreneur and SME clients.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'guillerminabalsas@vvabogados.com.uy'
    },
    { 
      name: 'Sofía Biatturi', 
      role: 'Communications Department', 
      img: '/images/SofiBiatturi1.jpg',
      modalImg: '/images/SofiBiatturi2.jpg',
      formation: 'Law student, Universidad Católica del Uruguay.',
      jobDescription: 'As a law student passionate about communication, I’m excited to blend my love for law with creating and protecting unique content in this IP-focused firm.',
      linkedinUrl: 'https://www.linkedin.com/in/sof%C3%ADa-biatturi-80287122a/',
      email: 'sofiabiatturi@vvabogados.com.uy'
    },
    { 
      name: 'Delfina Lacasa', 
      role: 'Legal Department', 
      img: '/images/DelfiLacasa1.jpg',
      modalImg: '/images/DelfiLacasa2.jpg',
      formation: 'Law student, Universidad Católica del Uruguay.',
      jobDescription: 'I support the legal team by tracking cases, drafting filings, and coordinating admin tasks to deliver agile, tailored responses.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'delfinalacasa@vvabogados.com.uy'
    },
    { 
      name: 'Agustín Gorla Félix', 
      role: 'Notarial and Real Estate Department', 
      img: '/images/AgusGorla1.jpg',
      modalImg: '/images/AgusGorla2.jpg',
      formation: 'Law student, School of Law, República Oriental del Uruguay.',
      jobDescription: 'I work in the Notarial and Real Estate Department, where each day I reaffirm the importance of legal certainty upheld by notarial practice, which should be understood as an investment in peace of mind and legal certainty regarding the acts and rights to which form and authenticity are given. My goal is always to earn the client’s trust by providing comprehensive advice and effective, astute, and diligent work.',
      linkedinUrl: 'https://www.linkedin.com/in/agust%C3%ADn-gorla-f%C3%A9lix-193633356/',
      email: 'agustingorla@vvabogados.com.uy'
    },
    { 
      name: 'Dra. María Laura Escudero', 
      role: 'IP Associate', 
      img: '/images/MariaLauraEscudero.jpg',
      modalImg: '/images/MariaLauraEscudero2.jpg',
      formation: 'Master in Business Law, Universidad de Montevideo (2020). Program on Negotiation, Harvard Law School (2019).',
      jobDescription: 'Advises clients on negotiation and resolution of commercial, civil, and labor disputes, focusing on IP solutions and preventive agreements.',
      linkedinUrl: 'https://www.linkedin.com/in/mar%C3%ADalauraescudero/',
      email: 'marialauraescudero@vvabogados.com.uy'
    },
    { 
      name: 'Federico Pérez del Castillo', 
      role: 'IP Associate', 
      img: '/images/perezDelCastilloFondoGris.jpg',
      modalImg: '/images/perezDelCastilloconFondo.jpg',
      formation: 'Attorney specialized in intellectual property and commercial agreements.',
      jobDescription: 'Drives IP strategies and agreements tied to licensing and technology transfer, bridging innovation and business.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'federicoperezdelcastillo@vvabogados.com.uy'
    },
    { 
      name: 'Álvaro da Silva', 
      role: 'IP Associate', 
      img: '/images/AlvaroDaSilvaFondoGris.jpg',
      modalImg: '/images/alvaromartindasilvafondo.jpg',
      formation: 'Attorney with experience in litigation, arbitration, and business advisory.',
      jobDescription: 'Works with the IP team on enforcement strategies, agreements, and dispute resolution for intangible assets.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'alvarodasilva@vvabogados.com.uy'
    },
    { 
      name: 'Ximena Araujo', 
      role: 'Legal Department', 
      img: '/images/XimenaAraujo.jpg',
      modalImg: '/images/XimenaAraujo.jpg',
      formation: 'Legal professional focused on operational management and client support.',
      jobDescription: 'Coordinates judicial and administrative steps, ensuring close follow-up and clear responses for clients.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'ximenaaraujo@vvabogados.com.uy'
    },
    { 
      name: 'María Eugenia Leoni', 
      role: 'Legal and IP Department', 
      img: '/images/mariaeugenialeoni.png',
      modalImg: '/images/mariaeugenialeoni.png',
      formation: 'Attorney and Notary Public, School of Law, Universidad de la República.',
      jobDescription: 'Behind every case there is a real-life situation. My commitment is to approach it in a comprehensive and human way, combining legal and notarial tools to provide clear, solid, and effective solutions.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/'
    },
    { 
      name: 'Facundo Chirico', 
      role: 'Legal Department', 
      img: '/images/FacundoChirico1.png',
      modalImg: '/images/FacundoChirico2.jpeg',
      formation: 'Law student, School of Law, República Oriental del Uruguay.',
      jobDescription: 'My legal education is greatly strengthened by being in continuous contact with courts, proceedings, and clients. Committed to our clients, I handle each case management process by optimizing timelines and complying with each requirement diligently.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/'
    },
    { 
      name: 'Ing. Cecilia Macias', 
      role: 'Regulatory Consultant', 
      img: '/images/CeciliaMacias.jpg',
      modalImg: '/images/CeciliaMacias.jpg',
      formation: 'Chemist graduated in 2016; experience since 2014 in the pharmaceutical industry (quality control, quality assurance, technical director).',
      jobDescription: 'My background in pharmaceutical chemistry and QA/QC gives me precise skills and a detailed approach I bring to IP matters, ensuring rigorous and efficient management of rights and regulations.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'ceciliamacias@vvabogados.com.uy'
    },
    { 
      name: 'Valentín Gadea', 
      role: 'Patent Department', 
      img: '/images/ValentinGadea.jpg',
      modalImg: '/images/ValentinGadea.jpg',
      formation: 'Biotechnology student, Universidad ORT Uruguay, with a strong interest in scientific and technological innovation.',
      jobDescription: 'I help manage and safeguard patents—a key process to protect inventions and foster innovation.',
      linkedinUrl: 'https://www.linkedin.com/company/vv-abogados/',
      email: 'valentingadea@vvabogados.com.uy'
    },
    { 
      name: 'Dr. Andrés Mendive', 
      role: 'Of Counsel', 
      img: '/images/AndresMendive.jpg',
      modalImg: '/images/AndresMendive.jpg',
      formation: 'Attorney, School of Law, República Oriental del Uruguay.',
      jobDescription: 'Specialized advisory, mentorship, and training.',
      linkedinUrl: 'https://www.linkedin.com/in/andr%C3%A9s-mendive-dubourdieu-204b8423/',
      email: 'andresmendive@vvabogados.com.uy'
    },
  ]
}

export default function Team(){
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const { lang } = useLanguage()
  const team = TEAM[lang]
  const copy = {
    es: {
      title: 'Equipo',
      desc: 'Contamos con un equipo de profesionales altamente capacitados y con una vasta experiencia tanto a nivel nacional como internacional en el ámbito de la Propiedad Intelectual. Esto, combinado con una estructura sólida, nos permite ofrecer servicios de la más alta calidad.'
    },
    en: {
      title: 'Team',
      desc: 'We have a highly skilled team with extensive national and international experience in Intellectual Property. Combined with a solid structure, this allows us to deliver services of the highest quality.'
    }
  } as const
  const t = copy[lang]
  const sectionRef = useScrollAnimation()

  const openModal = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }
  
  const nextTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % team.length)
  }
  
  const prevTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + team.length) % team.length)
  }

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setTouchEnd(null)
    setIsDragging(true)
    setDragOffset(0)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStart || !isDragging) return
    
    const currentTouch = e.targetTouches[0].clientX
    const diff = currentTouch - touchStart
    setTouchEnd(currentTouch)
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd || !isDragging) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }
    
    const distance = touchStart - touchEnd
    const threshold = 50

    if (Math.abs(distance) > threshold) {
      if (distance > 0) {
        nextTeamMember()
      } else {
        prevTeamMember()
      }
    }
    
    setIsDragging(false)
    setDragOffset(0)
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <section id="equipo" className="section scroll-animate" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{t.title}</h2>
        <p className="section-desc">{t.desc}</p>
        
        {/* Desktop Grid */}
        <div className="team-grid team-desktop">
          {team.map((p) => (
            <article 
              className="team-card" 
              key={p.name}
              onClick={() => openModal(p)}
              style={{ cursor: 'pointer' }}
            >
              <img className="team-img" src={p.img} alt={p.name} style={p.imageStyle} />
              <div className="team-overlay">
                <h3 className="team-name">{p.name}</h3>
                <p className="team-role">{p.role}</p>
                <span className="team-logo" aria-hidden>
                  <img src="/images/IsotipoBlanco.png" alt="" width="32" height="24" />
                </span>
              </div>
            </article>
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="team-mobile">
          <div 
            className="mobile-carousel-wrapper swipeable-carousel"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className={`mobile-carousel-track ${isDragging ? 'dragging' : ''}`}
              style={{
                transform: `translateX(calc(${-currentTeamIndex * 100}% + ${dragOffset}px))`
              }}
            >
              {team.map((member, index) => (
                <article 
                  key={index}
                  className="team-card mobile-carousel-item"
                  onClick={() => openModal(member)}
                  style={{ cursor: 'pointer' }}
                >
                  <img className="team-img" src={member.img} alt={member.name} style={member.imageStyle} />
                  <div className="team-overlay">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <span className="team-logo" aria-hidden>
                      <img src="/images/IsotipoBlanco.png" alt="" width="32" height="24" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
          
          <div className="mobile-carousel-dots">
            {team.map((_, index) => (
              <button
                key={index}
                className={`mobile-carousel-dot ${index === currentTeamIndex ? 'active' : ''}`}
                onClick={() => setCurrentTeamIndex(index)}
                aria-label={`Ver ${team[index].name}`}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedMember && createPortal(
        <TeamModal 
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={closeModal}
        />,
        document.body
      )}
    </section>
  )
}
