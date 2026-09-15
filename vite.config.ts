import react from '@vitejs/plugin-react'
import { copyFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const staticRoutes = {
  name: 'static-routes',
  closeBundle() {
    const output = resolve('dist')
    for (const route of ['pago/confirmando', 'pago/cancelado']) {
      const directory = resolve(output, route)
      mkdirSync(directory, { recursive: true })
      copyFileSync(resolve(output, 'index.html'), `${directory}.html`)
      copyFileSync(resolve(output, 'index.html'), resolve(directory, 'index.html'))
    }
    copyFileSync(resolve(output, 'index.html'), resolve(output, '404.html'))
  },
}

export default defineConfig({
  plugins: [react(), staticRoutes],
})
