import { environment } from './config/environment'
import { getPage } from './app/routes'
import { ReturnToAppButton } from './components/ReturnToAppButton'
import './App.css'

function App() {
  const page = getPage(window.location.pathname)
  return (
    <div className="page-shell">
      <header className="brand">{environment.appName}</header>
      <main className="status-panel" aria-labelledby="page-title">
        <span className="status-symbol" aria-hidden="true">{page.symbol}</span>
        <p className="eyebrow">{page.label}</p>
        <h1 id="page-title">{page.title}</h1>
        <p className="description">{page.description}</p>
        <ReturnToAppButton appName={environment.appName} returnUrl={environment.returnUrl} />
        <aside className="guidance" aria-label="Cómo continuar">
          <h2>Continúa en la app</h2>
          <p>Si la app no se abre, vuelve a {environment.appName} desde la pantalla de inicio de tu teléfono y revisa el estado de tu suscripción.</p>
        </aside>
      </main>
      <footer>El estado de tu suscripción se consulta en la app.</footer>
    </div>
  )
}
export default App
