<template lang="pug">
  div.container
    div
      Logo
      h1.title Nepeta
      v-btn(@click="buttonOnClick") test test
      div.links
        a(href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green") Documentation
        a(href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey") GitHub
</template>

<script>
export default {
  methods: {
    async buttonOnClick() {
      const posts = await this.$repository.posts.getAll()
      console.log(posts)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
