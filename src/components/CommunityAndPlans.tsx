import './CommunityAndPlans.css'

const assets = 'https://pagina-enprecencia.s3.us-east-1.amazonaws.com'
const spaces = [
  { id: 'diario', title: 'Tu diario personal', description: 'Escribe, reflexiona y observa tu evolución.', image: 'diario-personal.png', action: 'Explorar mi diario' },
  { id: 'comunidad', title: 'Comunidad consciente', description: 'Comparte, inspira y forma parte de una comunidad que también elige estar presente.', image: 'comunidad-consciente.png', action: 'Unirme a la comunidad' },
] as const
const plans = [
  { name: 'Diario', usd: '1.00', mxn: '16.91', period: 'por día', description: 'Una pausa para volver a ti.', icon: 'sprout', featured: false },
  { name: 'Quincenal', usd: '5.00', mxn: '84.55', period: 'por quincena', description: 'Da continuidad a tu práctica.', icon: 'branch', featured: false },
  { name: 'Mensual', usd: '9.00', mxn: '152.19', period: 'por mes', description: 'Haz espacio para tu bienestar.', icon: 'lotus', featured: false },
  { name: 'Anual', usd: '69.99', mxn: '1,183.53', period: 'por año', description: 'Un año para seguir tu camino.', icon: 'branch', featured: true },
] as const
const benefits = ['Ejercicios guiados', 'Reflexiones para tu día', 'Tu diario personal']

function BotanicalIcon({ kind }: { kind: 'sprout' | 'branch' | 'lotus' }) {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {kind === 'sprout' && <><path d="M31 58V29M31 46C9 47 8 33 8 33c15-2 23 5 23 13ZM32 36c21 0 23-22 23-22-18 2-24 12-23 22ZM31 30C17 21 26 5 26 5c12 10 12 17 5 25Z" /><path d="m14 37 17 9m18-25L32 36M27 13l4 17" /></>}
      {kind === 'branch' && <><path d="M20 59C25 37 35 22 45 5M29 38C9 36 18 21 18 21c9 3 13 10 11 17ZM36 26C27 9 38 5 38 5c3 7 3 14-2 21ZM24 49c18 1 25-13 25-13-14-1-21 5-25 13ZM34 32c18 1 22-13 22-13-12-1-19 6-22 13ZM42 15C40 2 53 2 53 2c0 9-5 13-11 13Z" /></>}
      {kind === 'lotus' && <><path d="M32 49C15 39 17 21 32 7c15 14 17 32 0 42ZM32 49C15 50 5 34 8 17c14 4 21 14 24 32ZM32 49c17 1 27-15 24-32-14 4-21 14-24 32Z" /><path d="M32 50C15 56 5 46 2 35c11-2 23 5 30 15ZM32 50c17 6 27-4 30-15-11-2-23 5-30 15ZM20 57h24" /></>}
    </svg>
  )
}

export function CommunityAndPlans() {
  return (
    <div className="community-plans">
      <section className="personal-spaces wellness-container" aria-label="Tu diario y tu comunidad">
        <div className="personal-spaces-grid">
          {spaces.map(space => (
            <article className={`personal-space personal-space-${space.id}`} id={space.id} key={space.id} aria-labelledby={`${space.id}-title`}>
              <img className="personal-space-image" src={`${assets}/${space.image}`} alt="" loading="lazy" decoding="async" />
              <div className="personal-space-copy">
                <h2 id={`${space.id}-title`}>{space.title}</h2>
                <p>{space.description}</p>
                <button type="button" className="home-button personal-space-button" disabled>{space.action}<span aria-hidden="true">→</span></button>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="plans-section wellness-container" id="planes" aria-labelledby="plans-title">
        <div className="plans-botanical plans-botanical-left"><BotanicalIcon kind="branch" /></div>
        <div className="plans-botanical plans-botanical-right"><BotanicalIcon kind="branch" /></div>
        <header className="wellness-heading plans-heading">
          <p className="wellness-eyebrow">Tu camino a tu ritmo</p>
          <h2 id="plans-title">Un espacio para ti. Un plan a tu medida.</h2>
          <p className="plans-subtitle">Elige cómo quieres acompañar tu bienestar.</p>
        </header>
        <div className="plans-grid">
          {plans.map(plan => (
            <article className={`plan-card${plan.featured ? ' plan-card-featured' : ''}`} key={plan.name} aria-labelledby={`plan-${plan.name}-title`}>
              {plan.featured && <p className="plan-badge">Tu camino a largo plazo</p>}
              <span className="plan-icon"><BotanicalIcon kind={plan.icon} /></span>
              <h3 id={`plan-${plan.name}-title`}>{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>
              <p className="plan-price">${plan.usd} <span>USD</span></p>
              <p className="plan-period">{plan.period}</p>
              <p className="plan-price-mxn">${plan.mxn} <span>MXN</span> {plan.period}</p>
              <ul className="plan-benefits">
                {benefits.map(benefit => <li key={benefit}><span className="plan-check" aria-hidden="true"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m5 10 3 3 7-7" /></svg></span>{benefit}</li>)}
              </ul>
              <button type="button" className="home-button plan-button" disabled aria-label={`Elegir plan ${plan.name}, ${plan.usd} USD o ${plan.mxn} MXN ${plan.period}`}>Elegir plan <span aria-hidden="true">→</span></button>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
