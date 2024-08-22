import DsIconfont from './index.vue'
const customCache = new Set()

DsIconfont.install = function (Vue, options) {
  const { scriptUrl } = options
  const link = document.createElement('link')
  link.setAttribute('rel', 'stylesheet')
  link.setAttribute('type', 'text/css')
  link.setAttribute('href', scriptUrl)
  customCache.add(scriptUrl)
  document.head.appendChild(link)
  Vue.component(DsIconfont.name, DsIconfont)
}

export default DsIconfont
