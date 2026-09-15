import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { getPage } from '../src/app/routes'
import { application } from '../src/config/application'
import { ReturnToAppButton } from '../src/components/ReturnToAppButton'

describe('Return destination trust boundary', () => {
  it('uses the fixed public destination without query or fragment', () => {
    const url = new URL(application.returnUrl)
    assert.equal(url.protocol, 'enpresenciaa:')
    assert.equal(url.hostname, 'billing')
    assert.equal(url.pathname, '/return')
    assert.equal(url.search, '')
    assert.equal(url.hash, '')
  })
})

describe('Non-authoritative return routes', () => {
  it('shows pending instead of successful payment', () => {
    assert.match(getPage('/pago/confirmando').description, /no confirma el pago/)
  })
  it('explains cancellation without claiming no charge occurred', () => {
    assert.equal(getPage('/pago/cancelado').label, 'Proceso cancelado')
    assert.match(getPage('/pago/cancelado').description, /no activa ningún acceso/)
  })
  it('handles root, unknown and encoded routes without reflecting the input', () => {
    for (const route of ['/', '/unknown', '/pago/%63onfirmando']) {
      assert.equal(getPage(route).title, '404')
      assert.equal(getPage(route).label, 'Página no encontrada')
    }
  })
  it('supports Amplify clean URLs with a trailing slash', () => {
    assert.equal(getPage('/pago/confirmando/').label, 'Confirmación pendiente')
    assert.equal(getPage('/pago/cancelado/').label, 'Proceso cancelado')
  })
})

describe('Recovery UI', () => {
  it('disables opening and provides manual recovery without configuration', () => {
    const html = renderToStaticMarkup(createElement(ReturnToAppButton, { appName: 'En Presenciaa', returnUrl: null }))
    assert.match(html, /disabled=""/)
    assert.match(html, /Abre la app manualmente/)
    assert.match(html, /role="status"/)
  })
  it('provides a named enabled action for valid configuration', () => {
    const html = renderToStaticMarkup(createElement(ReturnToAppButton, { appName: 'En Presenciaa', returnUrl: 'enpresenciaa://billing/return' }))
    assert.match(html, /Volver a En Presenciaa/)
    assert.doesNotMatch(html, / disabled=""/)
  })
})
