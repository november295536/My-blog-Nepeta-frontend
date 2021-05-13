<template lang="pug">
v-card.post
  .date {{ time }}
  h2.title
    nuxt-link(:to="postPage") {{ title }}
  markdown-it-vue(:content="content")
</template>

<script>
// import MarkdownItVue from 'markdown-it-vue'

export default {
  // components: {
  //   MarkdownItVue,
  // },
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    postPage() {
      return `/posts/${this.slug}`
    },
    time() {
      return new Intl.DateTimeFormat('tw', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(this.date)
    },
  },
}
</script>

<style lang="sass" scoped>
.post
  padding: 3%
  margin-bottom: 3%
  ::v-deep .markdown-body
    font-size: 1.7em
    line-height: 1.8em
    overflow-x: auto
.date
  font-size: 1.5em
  font-weight: 600
  color: grey
.title
  line-height: inherit
  ::v-deep a
    font-size: 3em
    text-decoration: none
    color: black
    &:hover
      color: #1976d2
      border-bottom:4px solid #1976d2
@include screen-until($md)
  .post
    ::v-deep .markdown-body
      font-size: 1.4em
      line-height: 1.5em
  .date
    font-size: 1.4em
    font-weight: 600
  .title
    ::v-deep a
      font-size: 2em

@include screen-until($sm)
  .post
    ::v-deep .markdown-body
      font-size: 1em
      line-height: 1.4em
  .date
    font-size: 1.2em
    font-weight: 600
  .title
    ::v-deep a
      font-size: 1.5em
</style>
