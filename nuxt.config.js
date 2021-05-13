import env from './.env.json'

export default {
  // import env
  env,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Aegis - November295536's blog",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/api.js',
    // blog 理所當然要 SSR 但目前 markwond-it-vue 裡用了不支援 SSR 的依賴
    // 暫時先這樣處理
    { src: '~/plugins/markdown-it-vue.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://vuetifyjs.com/zh-Hans/
    '@nuxtjs/vuetify',
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://localhost:8080', // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    axios: {
      browserBaseURL: env.api.client,
    },
  },
  privateRuntimeConfig: {
    axios: {
      baseURL: env.api.server,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
