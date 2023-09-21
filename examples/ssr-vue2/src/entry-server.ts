import { defineServer } from 'genesis3'
import { createRenderer } from 'vue-server-renderer'
import { createApp } from './main'

const renderer = createRenderer()

export default defineServer({
  async render (context) {
    const { app } = createApp()

    const html: string = await renderer.renderToString(app, context)
    context.html = `<div id="app">${html}</div>`
  }
})
