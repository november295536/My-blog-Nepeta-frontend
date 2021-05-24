<template lang="pug">
v-container(fluid)
  v-row
    v-col.post-list(cols='12', lg='9')
      post-viewer.posts(
        :id='post.id',
        :title='post.title',
        :showEdit='isLogin',
        :date='post.publishedTime',
        :slug='post.slug',
        :published='post.published',
        :content='post.content',
        @edit='editPost'
      )
    v-col.widget-area(cols='12', lg='3')
      profile
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ route, $repository }) {
    const slug = route.params.slug
    const data = await $repository.posts.getBySlug(slug)
    return {
      post: data,
    }
  },
  head() {
    const title = `${this.post.title} - November295536's blog`
    return {
      title,
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          property: 'og:title',
          content: title,
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
      editPostInit: 'post/editPostInit',
    }),
    editPost() {
      this.editPostInit(this.post)
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
  margin-bottom: 3%
.widget-area
  padding: 0 15px
</style>
