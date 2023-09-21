import { defineServer } from 'genesis3'
import {
  renderToString
} from '@builder.io/qwik/server'
import { manifest } from '@qwik-client-manifest'

import { AppNode } from './app'

export default defineServer({
  async render (context) {
    const result = await renderToString(AppNode, {
      base: '/genesis3/genesis3/build/',
      manifest: manifest ?? {},
      symbolMapper
    })
    context.html = result.html
  }
})

function symbolMapper (symbolName: string, mapper: any) {
  const getSymbolHash = (symbolName: string) => {
    const index = symbolName.lastIndexOf('_')
    if (index > -1) {
      return symbolName.slice(index + 1)
    }
    return symbolName
  }
  const defaultChunk = [symbolName, `/genesis3/src/${symbolName.toLowerCase()}.js`]
  if (mapper) {
    const hash = getSymbolHash(symbolName)
    return mapper[hash] ?? defaultChunk
  }
  return defaultChunk
}
