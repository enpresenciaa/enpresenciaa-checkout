const pages = {
  pending: {
    isNotFound: false,
    symbol: '…',
    label: 'Confirmación pendiente',
    title: 'Estamos esperando la confirmación',
    description: 'La confirmación de tu pago puede tardar unos momentos. Vuelve a la app para consultar su estado. Llegar a esta página no confirma el pago ni activa tu suscripción.',
  },
  cancelled: {
    isNotFound: false,
    symbol: '−',
    label: 'Proceso cancelado',
    title: 'Has salido del proceso de pago',
    description: 'Puedes volver a la app y retomar el proceso cuando quieras. Esta pantalla no activa ningún acceso ni confirma movimientos en tu cuenta.',
  },
  notFound: {
    isNotFound: true,
    symbol: '',
    label: 'Página no encontrada',
    title: '404',
    description: '',
  },
}
export function getPage(pathname: string) {
  if (pathname === '/pago/confirmando' || pathname === '/pago/confirmando/') return pages.pending
  if (pathname === '/pago/cancelado' || pathname === '/pago/cancelado/') return pages.cancelled
  return pages.notFound
}
