import { useEffect, useRef, useState } from 'react'

type Props = { appName: string; returnUrl: string | null }
export function ReturnToAppButton({ appName, returnUrl }: Props) {
  const [opening, setOpening] = useState(false)
  const [attempted, setAttempted] = useState(false)
  const locked = useRef(false)
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timer.current), [])
  function openApp() {
    if (!returnUrl || locked.current) return
    locked.current = true
    setOpening(true)
    setAttempted(true)
    timer.current = setTimeout(() => {
      locked.current = false
      setOpening(false)
    }, 1800)
    try {
      window.location.assign(returnUrl)
    } catch {
      clearTimeout(timer.current)
      locked.current = false
      setOpening(false)
    }
  }
  return (
    <div className="return-action">
      <button type="button" onClick={openApp} disabled={!returnUrl}
        aria-disabled={opening || !returnUrl} aria-describedby="return-feedback">
        {opening ? 'Abriendo la app…' : attempted ? 'Intentar abrir de nuevo' : `Volver a ${appName}`}
        <span aria-hidden="true">↗</span>
      </button>
      <p id="return-feedback" className="feedback" role="status">
        {!returnUrl
          ? 'El enlace para abrir la app no está disponible. Abre la app manualmente desde tu teléfono.'
          : attempted
            ? 'Si no se abrió la app, puedes intentarlo de nuevo o abrirla manualmente.'
            : 'Abre la app en este dispositivo para continuar.'}
      </p>
    </div>
  )
}
