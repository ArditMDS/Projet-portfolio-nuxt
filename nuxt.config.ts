// https://nuxt.com/docs/api/confiuration/nuxt-config
export default defineNuxtConfig({
    modules: [
      '@nuxtjs/tailwindcss'
    ],
    build: {
      transpile: ['vuetify'],
    },
    css: [
        '@/assets/css/main.css',
      ],
})
