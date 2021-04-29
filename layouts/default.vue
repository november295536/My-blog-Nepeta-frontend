<template lang="pug">
  div
    v-app.main-container
      .hero
        v-responsive(:aspect-ratio="10/1")
          NuxtLink(to="/").home-page-link
            h1.blog-title Aegis
          h2.motto Strong opinions, weakly held.
      .content-container
        Nuxt
      .footer
      
</template>

<style lang="sass" scoped>
.main-container
  min-height: 100vh
  background: #F5F5F5 !important
.hero
  padding: 3% 6%
  background-size: cover
  background-position-y: 60%
  background-color: black
  color: white
  background-image: url(~/assets/cover.jpg)
  ::v-deep a
    text-decoration: none
.blog-title
  width: fit-content
  font-size: 4em
  color: white
.content-container
  padding: 20px
.footer
  height: 200px
  background-color: #23282D
</style>
