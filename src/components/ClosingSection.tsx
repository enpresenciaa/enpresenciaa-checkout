import './ClosingSection.css'
import { application } from '../config/application'

export function ClosingSection() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <img className="closing-landscape" src="https://pagina-enprecencia.s3.us-east-1.amazonaws.com/paisaje-cierre.png" alt="" loading="lazy" decoding="async" />
      <div className="closing-content">
        <img className="closing-logo" src={application.logoUrl} alt="En Presenciaa" width="500" height="500" loading="lazy" />
        <p className="wellness-eyebrow">Tu camino empieza ahora</p>
        <h2 id="closing-title">Crea una vida más presente</h2>
        <p className="closing-description">Da el primer paso hacia una versión más consciente de ti.<br />En Presenciaa te acompaña, paso a paso.</p>
        <button className="home-button closing-button" type="button" disabled>Comenzar mi camino <span aria-hidden="true">→</span></button>
      </div>
    </section>
  )
}

