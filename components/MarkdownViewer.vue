<template lang="pug">
.markdown-viewer
  .markdown-body(ref="markdown-container" v-html="$md.render(content)")
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="sass" scoped>
.markdown-body
  ::v-deep pre
    padding: 0
    font-size: 90%
    line-height: 1.6em
  ::v-deep .hljs
    display: block
    padding: 1.5em
    background: #011627
</style>
