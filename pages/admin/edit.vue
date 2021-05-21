<template lang="pug">
.post-edit
  .mode {{ modeDescription }}

  post-editor(
    v-if='isLogin',
    :mode='mode',
    :post='editingPost',
    :categoryItems='categoryItems',
    :tagItems='tagItems',
    @submit='postSubmit'
  )
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
import { EDITOR_MODE } from '~/store/post'

export default {
  computed: {
    ...mapState({
      editingPost: (state) => state.post.editingPost,
      categoryItems: (state) => state.post.categoryItems,
      tagItems: (state) => state.post.tagItems,
      mode: (state) => state.post.editorMode,
      init: (state) => state.post.editorInit,
    }),
    ...mapGetters({
      isLogin: 'user/auth/isLogin',
    }),
    modeDescription() {
      if (this.mode === EDITOR_MODE.create) return 'Create post'
      return 'Edit post'
    },
  },
  mounted() {
    if (!this.isLogin) this.$router.push('/')
    if (!this.init) this.fetchCategoryAndTag()
  },
  methods: {
    ...mapActions({
      fetchCategoryAndTag: 'post/fetchCategoryAndTag',
      createPost: 'post/createPost',
      updatePost: 'post/updatePost',
    }),
    async postSubmit(post) {
      if (this.mode === EDITOR_MODE.create) return await this.createPost(post)
      return await this.updatePost(post)
    },
  },
}
</script>

<style lang="sass" scoped>
.mode
  font-size: 2.5em
  font-weight: 600
</style>
