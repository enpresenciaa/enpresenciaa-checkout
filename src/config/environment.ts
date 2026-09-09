export function validateReturnUrl(value: unknown): string | null {
  return value === 'enpresenciaa://billing/return' ? value : null
}
export function readEnvironment(values: { appName?: unknown; returnUrl?: unknown }) {
  const name = typeof values.appName === 'string' ? values.appName.trim() : ''
  return {
    appName: name && name.length <= 80 ? name : 'En Presenciaa',
    returnUrl: validateReturnUrl(values.returnUrl),
  }
}
export const environment = readEnvironment({
  appName: import.meta.env.VITE_APP_NAME,
  returnUrl: import.meta.env.VITE_APP_RETURN_URL,
})
