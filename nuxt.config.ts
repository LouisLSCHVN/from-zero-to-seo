export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  experimental: {
    viewTransition: true,
  },

  routeRules: {
    '/rules': { static: true, }
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      htmlAttrs: {
        class: 'bg-secondary'
      }
    }
  },

  future: {
    compatibilityVersion: 4,
  },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/fonts', '@nuxtjs/critters'],
})