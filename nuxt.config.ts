// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Forbes Middle East News",
      meta: [
        {
          name: "description",
          content:
            "Latest business, world, technology, health, sports, culture, and podcast stories from Forbes Middle East.",
        },
        { name: "theme-color", content: "#f5f5fa" },
      ],
      script: [
        {
          innerHTML:
            "try{var t=localStorage.getItem('theme');var d=t?t==='dark':matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}",
        },
      ],
    },
  },
});
