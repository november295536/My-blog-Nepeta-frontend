<template lang="pug">
  v-container(fluid)
    v-row
      v-col.post-list(
        cols="12"
        lg="9")
        post-viewer.posts(
          v-for="post in posts"
          :key="post.id"
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
    posts() {
      return this.$repository.posts.getAll()
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
