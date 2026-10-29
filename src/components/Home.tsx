import './Home.css'
import { application } from '../config/application'
import { WellnessSections } from './WellnessSections'
import { CommunityAndPlans } from './CommunityAndPlans'
import { ClosingSection } from './ClosingSection'

const assets = 'https://pagina-enprecencia.s3.us-east-1.amazonaws.com'

function HeroIcon({ kind }: { kind: 'leaf' | 'journal' | 'circle' }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === 'leaf' && <><path d="M7 24C1 12 14 8 27 4c0 14-5 24-16 20" /><path d="M5 29 23 10M11 22l1-8M16 17l7-1" /></>}
      {kind === 'journal' && <><rect x="7" y="3" width="20" height="26" rx="2" /><path d="M11 3v26M15 10h8M15 15h8M4 7v20" /></>}
      {kind === 'circle' && <><path d="M25 6C12-4 0 9 4 22c3 10 19 11 24 1M21 4c12 4 12 20 2 25" /><path d="M23 11C15 3 6 12 9 21c3 7 12 7 17 1" /></>}
    </svg>
  )
}


export function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <a className="home-logo" href="/" aria-label="En Presenciaa, inicio">
          <img src={application.logoUrl} alt="" width="72" height="72" /><span>En Presenciaa</span>
        </a>
        <nav aria-label="Navegación principal">
          <a className="home-nav-current" href="#inicio">Inicio</a>
          <a href="#ejercicios">Ejercicios</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#planes">Planes</a>
        </nav>
        <a className="home-button home-header-button" href="#planes">Comenzar</a>
      </header>
      <main className="home-main">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-eyebrow">Un momento para volver a ti</p>
            <h1 id="hero-title">Haz una pausa.<br />Encuentra tu camino.</h1>
            <p className="hero-description">Ejercicios, reflexiones y un espacio para conectar contigo, a tu ritmo.</p>
            <div className="hero-actions">
              <a className="home-button hero-button" href="#planes">Comenzar mi camino <span aria-hidden="true">→</span></a>
              <a className="hero-explore" href="#ejercicios">Conoce la experiencia</a>
            </div>
          </div>
          <div className="hero-panorama" aria-hidden="true">
            <svg className="hero-panorama-image" viewBox="0 0 1440 400" preserveAspectRatio="none">
              <defs><clipPath id="hero-landscape-wave"><path d="M0 40C170-25 275 140 500 155S800 185 1020 130 1260 80 1440 125V350C1240 275 1060 425 820 370S560 285 340 300 110 330 0 255Z" /></clipPath></defs>
              <image href={`${assets}/videos-introduccion.png`} width="1440" height="400" preserveAspectRatio="xMidYMid slice" clipPath="url(#hero-landscape-wave)" />
              <path d="M0 17C260 100 270 168 505 173S805 218 1020 155 1250 78 1440 103M0 274C210 365 340 275 558 321S825 430 1060 370 1280 303 1440 375" fill="none" stroke="#b59556" strokeWidth="1" />
            </svg>
          </div>
          <div className="hero-phone">
            <img className="hero-phone-image" src={`${assets}/InicioEnPresencia.png`} alt="Inicio de En Presenciaa con las dimensiones mental, emocional, física y energética o espiritual" width="883" height="1782" fetchPriority="high" />
          </div>
          <ul className="hero-benefits" aria-label="Tu camino de bienestar">
            <li><HeroIcon kind="leaf" />Respira</li>
            <li><HeroIcon kind="journal" />Reflexiona</li>
            <li><HeroIcon kind="circle" />Reconecta</li>
          </ul>
        </section>
        <WellnessSections />
        <CommunityAndPlans />
        <ClosingSection />
      </main>
    </div>
  )
}




