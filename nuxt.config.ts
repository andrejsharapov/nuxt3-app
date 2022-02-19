import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  buildModules: [],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  components: true,
  css: ["~/assets/css/tailwind.css", "~/assets/css/app.css"],
  meta: {
    htmlAttrs: {
      lang: "en",
    },
    link: [],
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  modules: ["@nuxtjs/color-mode"],
});
