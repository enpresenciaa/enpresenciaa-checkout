import './WellnessSections.css'

const assets = 'https://pagina-enprecencia.s3.us-east-1.amazonaws.com'
const exercises = [
  { title: 'Audios guiados', description: 'Relájate y reconecta', image: 'audios-guiados.png', alt: 'Mujer con los ojos cerrados escuchando audio con audífonos al amanecer' },
  { title: 'Videos de introducción', description: 'Descubre nuevas perspectivas', image: 'videos-introduccion.png', alt: 'Amanecer dorado sobre un valle de montañas y bosques entre la niebla' },
  { title: 'Reflexiones escritas', description: 'Conecta contigo cada día', image: 'reflexiones-escritas.png', alt: 'Cuaderno abierto con una pluma sobre sus páginas, iluminado por el sol' },
] as const

function DimensionIcon({ kind }: { kind: 'mental' | 'emotional' | 'physical' | 'spiritual' }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === 'mental' && <><path d="M19 7c-3-5-9-1-8 3-5 0-7 5-4 9-4 4-2 10 3 10 0 5 6 7 9 3ZM21 7c3-5 9-1 8 3 5 0 7 5 4 9 4 4 2 10-3 10 0 5-6 7-9 3Z" /><path d="M12 11c4 0 5 3 3 6M8 20c5-2 8 1 6 5M12 29c0-3 2-4 5-4M28 11c-4 0-5 3-3 6M32 20c-5-2-8 1-6 5M28 29c0-3-2-4-5-4" /></>}
      {kind === 'emotional' && <path d="M20 34 6 20C-5 9 10-3 20 10 30-3 45 9 34 20Z" />}
      {kind === 'physical' && <><circle cx="23" cy="7" r="3" /><path d="m17 12 8 2 5 7-3 2-5-6-3 8 7 5-2 6-4-1 1-3-8-5-7 8-3-3 9-11 2-6-6 4-2-3Z" /></>}
      {kind === 'spiritual' && <><path d="M20 31c-9-6-10-15 0-26 10 11 9 20 0 26Z" /><path d="M20 32C9 31 4 24 5 13c8 3 13 9 15 19ZM20 32c11-1 16-8 15-19-8 3-13 9-15 19Z" /><path d="M20 33C9 36 2 30 1 23M20 33c11 3 18-3 19-10" /></>}
    </svg>
  )
}

const dimensions = [
  { title: 'Mental', description: 'Calma y claridad mental', kind: 'mental' },
  { title: 'Emocional', description: 'Reconoce y habita tus emociones', kind: 'emotional' },
  { title: 'Física', description: 'Conecta con tu cuerpo', kind: 'physical' },
  { title: 'Espiritual', description: 'Encuentra un propósito más profundo', kind: 'spiritual' },
] as const

export function WellnessSections() {
  return (
    <div className="wellness-sections">
      <section className="exercises-section wellness-container" aria-labelledby="exercises-title" id="ejercicios">
        <header className="wellness-heading">
          <p className="wellness-eyebrow">Pequeños pasos, grandes cambios</p>
          <h2 id="exercises-title">Ejercicios para tu día a día</h2>
          <p className="wellness-intro">Explora audios, videos y reflexiones diseñados<br className="wellness-desktop-break" /> para acompañarte en tu camino.</p>
        </header>
        <div className="exercise-grid">
          {exercises.map(exercise => (
            <article className="exercise-card" key={exercise.title}>
              <div className="exercise-image-wrap">
                <img src={`${assets}/${exercise.image}`} alt={exercise.alt} loading="lazy" decoding="async" width="1672" height="941" />
              </div>
              <div className="exercise-card-copy">
                <h3>{exercise.title}</h3>
                <p>{exercise.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="dimensions-section" aria-labelledby="dimensions-title">
        <svg className="dimensions-path" viewBox="0 0 1440 340" preserveAspectRatio="none" fill="none" aria-hidden="true"><path d="M-40 335C160 190 350 420 540 200S780 193 995 100 1200 10 1430 44" stroke="currentColor" strokeWidth="1" /><g transform="translate(1370 40)"><circle r="11" stroke="currentColor" /><circle r="5" stroke="currentColor" />{Array.from({ length: 20 }, (_, index) => <path key={index} d="M0-16V-29" stroke="currentColor" transform={`rotate(${index * 18})`} />)}</g></svg>
        <div className="dimensions-layout wellness-container">
          <header className="wellness-heading dimensions-heading">
            <p className="wellness-eyebrow">Un equilibrio integral</p>
            <h2 id="dimensions-title">Cuatro dimensiones,<br />un mismo camino</h2>
            <p className="wellness-intro">Explora y nutre las diferentes áreas de tu vida,<br className="wellness-desktop-break" /> desde una mirada integral y consciente.</p>
          </header>
          <ul className="dimension-grid">
            {dimensions.map(dimension => (
              <li className={`dimension-item dimension-${dimension.kind}`} key={dimension.kind}>
                <span className="dimension-icon"><DimensionIcon kind={dimension.kind} /></span>
                <h3>{dimension.title}</h3>
                <p>{dimension.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

