import './ClosingSection.css'

export function ClosingSection() {
  return (
    <section className="closing-section" aria-labelledby="closing-title">
      <img className="closing-landscape" src="https://pagina-enprecencia.s3.us-east-1.amazonaws.com/paisaje-cierre.png" alt="" loading="lazy" decoding="async" />
      <div className="closing-content">
        <svg className="closing-sun" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
          <circle cx="32" cy="30" r="10" />
          {Array.from({ length: 24 }, (_, index) => <path key={index} d="M32 16 30.7 3 33.3 3Z" fill="currentColor" stroke="none" transform={`rotate(${index * 15} 32 30)`} />)}
          <path d="M29 39V27a3 3 0 0 1 6 0v12M32 32v29" />
        </svg>
        <p className="wellness-eyebrow">Tu camino empieza ahora</p>
        <h2 id="closing-title">Crea una vida más presente</h2>
        <p className="closing-description">Da el primer paso hacia una versión más consciente de ti.<br />En Presenciaa te acompaña, paso a paso.</p>
        <button className="home-button closing-button" type="button" disabled>Comenzar mi camino <span aria-hidden="true">→</span></button>
      </div>
    </section>
  )
}
