import shadows from 'vue3-box-shadows';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(shadows, {
    // useClass: true,
  });
});
