export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  experimental: {
    viewTransition: true,
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  future: {
    compatibilityVersion: 4,
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts'],
})