<template lang="pug">
.dashboard
  client-only
    v-container(v-if='isLogin', fluid)
      v-row
        v-col(cols='12')
          v-data-table(
            :headers='headers',
            :items='posts',
            :loading='loading',
            :options.sync='options',
            :server-items-length='totalItems'
          )
            template(v-slot:item.actions='{ item }')
              v-icon.mr-2(small, @click='editPost(item)') mdi-pencil
              v-icon(small, @click='deletePost(item)') mdi-delete
            template(v-slot:no-data)
              v-btn(color='primary', @click='reload') Reload
            template(v-slot:top)
              v-toolbar(flat)
                v-toolbar-title 文章列表
                v-spacer
                v-btn.mb-2(color='primary', dark, @click='createPost') New Post
                v-dialog(v-model='deleteDialog', max-width='500px')
                  v-card
                    v-card-title 確定要刪除文章？
                    v-card-actions
                      v-spacer
                      v-btn(color='blue darken-1', text, @click='cancelDelete') Cancel
                      v-btn(
                        color='blue darken-1',
                        text,
                        @click='confirmDelete'
                      ) Confirm
                      v-spacer
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { postFormatter } from '~/tool/postFormatter'

export default {
  data() {
    return {
      loading: true,
      totalItems: 0,
      options: {
        page: 1,
        itemsPerPage: 10,
      },
      deleteDialog: false,
      postToDelete: null,
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Title', value: 'title' },
        { text: 'Slug', value: 'slug' },
        { text: 'Publish state', value: 'published' },
        { text: 'Create Data', value: 'createTime' },
        { text: 'Last edit date', value: 'lastEditTime' },
        { text: 'Publist date', value: 'publishedTime' },
        { text: 'Actions', value: 'actions' },
      ],
      rawPosts: [],
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/auth/isLogin',
    }),
    posts() {
      if (this.rawPosts.length === 0) return []
      return this.rawPosts.map(postFormatter.dateToISOString)
    },
  },
  watch: {
    options: {
      handler() {
        this.reload()
      },
      deep: true,
    },
  },
  mounted() {
    if (!this.isLogin) return this.$router.push('/')
    this.reload()
  },
  methods: {
    ...mapActions({
      createPost: 'post/createPostInit',
      editPostInit: 'post/editPostInit',
    }),
    async reload() {
      this.loading = true
      const data = await this.$repository.posts.getPage(
        this.options.page,
        this.options.itemsPerPage
      )
      this.rawPosts = data.posts
      this.totalItems = data.totalItems
      this.loading = false
    },
    editPost(targetPost) {
      const editingpost = this.rawPosts.find(
        (post) => post.id === targetPost.id
      )
      this.editPostInit(editingpost)
    },
    deletePost(post) {
      this.postToDelete = post
      this.deleteDialog = true
    },
    cancelDelete() {
      this.postToDelete = null
      this.deleteDialog = false
    },
    async confirmDelete() {
      await this.$repository.posts.delete(this.postToDelete.id)
      await this.reload()
      this.postToDelete = null
      this.deleteDialog = false
    },
  },
}
</script>
