<template lang="pug">
v-app.main-container
  client-only
    .admin-header(v-if='isLogin')
      NuxtLink.dashboard-link(to='/admin/dashboard') Dashboard
      a.logout(@click.prevent='logout') logout
  .hero
    NuxtLink.home-page-link(to='/')
      h1.blog-title Aegis
    h2.motto Strong opinions, weakly held.
  .content-container
    Nuxt
  .footer
    p
      a(
        href='https://github.com/november295536/Nepeta-frontend',
        target='_blank'
      ) SourceCode@frontend
      span |
      a(
        href='https://github.com/november295536/Cataria-backend',
        target='_blank'
      ) SourceCode@backend
      span |
      a(href='https://www.vultr.com/?ref=8555440', target='_blank') Host on Vultr
      span |
      span Icons made by
      a(href='https://www.flaticon.com/authors/pixel-perfect', target='_blank') Pixel perfect
      span from
      a(href='https://www.flaticon.com/', target='_blank') www.flaticon.com
    p Copyright © 2021 november295536
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: `${process.env.base}${require('~/assets/cover.jpg')}`,
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/auth/isLogin',
    }),
  },
  methods: {
    ...mapActions({
      logout: 'user/auth/logout',
    }),
  },
}
</script>

<style lang="sass" scoped>
.main-container
  min-height: 100vh
  background: #F5F5F5 !important
.admin-header
  display: flex
  position: fixed
  background: aliceblue
  width: 100%
  z-index: 300
  padding: 3px 15px
  justify-content: flex-end
.logout
  color: #1976d2
  text-decoration: underline
  cursor: pointer
.dashboard-link
  margin-right: 10px
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
  // color: #1976d2
  height: fit-content
  padding: 20px
  word-break: break-word
  text-align: center
  ::v-deep a, span
    margin-right: 3px
  // background-color: #23282D
</style>
