// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      // dataSource: "http://localhost:3003",
      dataSource: "https://jsonplaceholder.typicode.com",
    },
  },
});
