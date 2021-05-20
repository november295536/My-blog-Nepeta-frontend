<template lang="pug">
  v-container(fluid)
    v-row
      v-col.post-list(
        cols="12"
        lg="9")
        //- Markdown-test
        post-viewer.posts(
          :title="post.title"
          :date="post.createTime"
          :slug="post.slug"
          :content="post.content"
          )
      v-col.widget-area(
        cols="12"
        lg="3")
        profile
</template>

<script>
export default {
  computed: {
    post() {
      return this.$repository.posts
        .getAll()
        .find((post) => post.slug === this.$route.params.slug)
    },
  },
}
</script>

<style lang="sass" scoped>
.container
  @include screen-until($sm)
    display: block
.post-list
  padding: 0 15px
.widget-area
  padding: 0 15px
</style>
