import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { getPage } from '../src/app/routes'
import { readEnvironment, validateReturnUrl } from '../src/config/environment'
import { ReturnToAppButton } from '../src/components/ReturnToAppButton'

describe('Return destination trust boundary', () => {
  it('accepts only the configured app destination', () => {
    assert.equal(validateReturnUrl('enpresenciaa://billing/return'), 'enpresenciaa://billing/return')
  })
  for (const value of [undefined, null, '', ' ', 42, 'javascript:alert(1)',
    'https://example.com', '//example.com', 'enpresenciaa://other/return',
    'enpresenciaa://billing/return?token=example', 'enpresenciaa://billing/return#example',
    'enpresenciaa://user:pass@billing/return', 'enpresenciaa://billing/return/../other',
    ' enpresenciaa://billing/return', 'enpresenciaa://billing/return\n']) {
    it(`rejects invalid destination ${JSON.stringify(value)}`, () => {
      assert.equal(validateReturnUrl(value), null)
    })
  }
  it('falls back safely when configuration is missing', () => {
    assert.deepEqual(readEnvironment({}), { appName: 'En Presenciaa', returnUrl: null })
    assert.equal(readEnvironment({ appName: '  ' }).appName, 'En Presenciaa')
    assert.equal(readEnvironment({ appName: 'x'.repeat(81) }).appName, 'En Presenciaa')
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
    for (const route of ['/', '/unknown', '/pago/%63onfirmando', '/pago/confirmando/']) {
      assert.equal(getPage(route).label, 'Enlace no disponible')
    }
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
