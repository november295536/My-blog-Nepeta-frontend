<template lang="pug">
v-container(fluid)
  v-row
    v-col.post-list(cols='12', lg='9')
      post-viewer.posts(
        v-for='post in posts',
        :key='post.id',
        :id='post.id',
        :showEdit='isLogin',
        :title='post.title',
        :date='post.publishedTime',
        :slug='post.slug',
        :published='post.published',
        :content='post.content',
        @edit='editPost'
      )
      v-pagination.pageination(
        v-if='totalPage > 1',
        :value='page',
        @input='pageChange',
        :length='totalPage'
      )
    v-col.widget-area(cols='12', lg='3')
      profile
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import testData from '~/.develop-data'

export default {
  async asyncData({ query, $repository }) {
    const page = query.page || 1
    const data = await $repository.posts.getPage(page)
    return {
      posts: data.posts,
      page: data.currentPage,
      totalPage: data.totalPage,
      totalItems: data.totalItems,
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/auth/isLogin',
    }),
  },
  mounted() {
    window.test1 = testData
    window.test2 = this.posts
  },
  methods: {
    ...mapActions({
      editPostInit: 'post/editPostInit',
    }),
    async pageChange(value) {
      const currentPath = this.$route.path
      const targetPath =
        value !== 1 ? `${currentPath}?page=${value}` : currentPath
      this.$router.push(targetPath)
      const data = await this.$repository.posts.getPage(value)
      this.posts = data.posts
      this.page = value
      this.totalPage = data.totalPage
      this.totalItems = data.totalItems
    },
    editPost(id) {
      const editingPost = this.posts.find((post) => post.id === id)
      this.editPostInit(editingPost)
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
.post
  margin-bottom: 3%
.pageination
  margin-bottom: 3%
</style>
