// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/seo", "@nuxtjs/tailwindcss"],
  site: {
    // production URL
    url: 'https://example.com',
  },
})