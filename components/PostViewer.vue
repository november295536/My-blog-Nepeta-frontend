<template lang="pug">
v-card.post
  .post-header
    .date(v-if='published') {{ time }}
    .published(v-else) 未發布
    v-btn.mb-2(
      v-if='showEdit',
      color='primary',
      dark,
      small,
      @click='editPost'
    ) edit

  h2.title
    nuxt-link(:to='postPage') {{ title }}
  markdown-viewer(:content='content')
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
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
      default: () => new Date(),
    },
    slug: {
      type: String,
      default: undefined,
    },
    published: {
      type: Boolean,
      required: true,
    },
    showEdit: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    postPage() {
      const postPath = this.slug || this.id
      return `/posts/${postPath}`
    },
    time() {
      return new Intl.DateTimeFormat('tw', {
        month: 'short',
        day: '2-digit',
        year: 'numeric',
      }).format(this.date)
    },
  },
  methods: {
    editPost() {
      this.$emit('edit', this.id)
    },
  },
}
</script>

<style lang="sass" scoped>
.post
  padding: 3%
  ::v-deep .markdown-body
    font-size: 1.4em
    line-height: 1.6em
    overflow-x: auto
.post-header
  display: flex
  justify-content: space-between
.date
  font-size: 1.3em
  font-weight: 600
  color: grey
.published
  font-size: 1.3em
  color: red
.title
  position: relative
  left: -0.3%
  line-height: inherit
  ::v-deep a
    font-size: 2.5em
    text-decoration: none
    color: black
    &:hover
      color: #1976d2
      border-bottom: 4px solid #1976d2
@include screen-until($md)
  .post
    ::v-deep .markdown-body
      font-size: 1.3em
      line-height: 1.5em
  .date
    font-size: 1.1em
    font-weight: 600
  .title
    ::v-deep a
      font-size: 1.5em

@include screen-until($sm)
  .post
    ::v-deep .markdown-body
      font-size: 1em
      line-height: 1.6em
  .date
    font-size: 1em
    font-weight: 600
  .title
    ::v-deep a
      font-size: 1.5em
</style>
