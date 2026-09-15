import { application } from './config/application'
import { getPage } from './app/routes'
import { ReturnToAppButton } from './components/ReturnToAppButton'
import './App.css'

function App() {
  const page = getPage(window.location.pathname)
  if (page.isNotFound) {
    return (
      <div className="page-shell">
        <header className="brand">{application.name}</header>
        <main className="not-found-panel" aria-labelledby="page-title">
          <h1 id="page-title" className="not-found-code">{page.title}</h1>
          <p className="not-found-message">{page.label}</p>
        </main>
      </div>
    )
  }
  return (
    <div className="page-shell">
      <header className="brand">{application.name}</header>
      <main className="status-panel" aria-labelledby="page-title">
        <span className="status-symbol" aria-hidden="true">{page.symbol}</span>
        <p className="eyebrow">{page.label}</p>
        <h1 id="page-title">{page.title}</h1>
        <p className="description">{page.description}</p>
        <ReturnToAppButton appName={application.name} returnUrl={application.returnUrl} />
        <aside className="guidance" aria-label="Cómo continuar">
          <h2>Continúa en la app</h2>
        </aside>
      </main>
    </div>
  )
}
export default App
