import path from 'path'
import vue from '@vitejs/plugin-vue'
import {defineConfig} from 'vite'
import {alias} from '../../scripts'

interface BuildObj {
  base?:string;
  build?:object
}

export default defineConfig(async ({  mode }) => {
  let docsBuild: BuildObj= {} ;
  if (mode === 'docs') {
    docsBuild.base = './'
    docsBuild.build = {
      outDir: '../../docs/.vitepress/dist/element-plus'
    }
  }
  return {
    server: {
      port: '3333'
    },
    plugins: [vue()],
    build: {
      rollupOptions: {
        external: ['element-plus', 'vue']
      },
      lib: {
        entry: path.resolve(__dirname, './src/index.ts'),
        name: 'voiceUi',
        fileName: 'hh-pc-vue3',
        formats: ['es', 'cjs', 'umd', 'iife']
      }
    },
    resolve: {
      alias: await alias()
    },
    ...docsBuild
  }
})
