<template lang="pug">
client-only
  .post-editor
    v-form(v-model='valid', ref='form')
      .title
        v-text-field#title(
          v-model='title',
          label='Title',
          :rules='[(v) => !!v || "Title is required"]'
        )
      .slug
        v-text-field#slug(v-model='slug', label='Slug')
      .create-time
        date-picker(
          v-model='createTime',
          label='Create time',
          :readonly='!isCreate'
        )
      .lastEditTime(v-if='showLastEditTime')
        date-picker(
          v-model='lastEditTime',
          label='Last edit time',
          :readonly='!isCreate',
          :rules='[(v) => !!v || "Date is required"]'
        )
      .published
        v-checkbox(v-model='published', label='Publish')
      .publishedTime(v-if='showpublishedTime')
        date-picker(
          v-model='publishedTime',
          label='Publish time',
          :readonly='!isCreate',
          :rules='[(v) => !!v || "Date is required"]'
        )
      .category
        v-combobox(
          v-model='category',
          label='Category',
          :items='categoryItems',
          clearable,
          hide-selected
        )
      .tag
        v-combobox(
          v-model='tag',
          label='tag',
          :items='tagItems',
          clearable,
          chips,
          multiple,
          hide-selected
        )
      .content
        mavon-editor(v-model='content', language='zh-TW')
      .submit
        v-btn(@click='submit', color='success') Save
</template>

<script>
import { EDITOR_MODE } from '~/store/post'

export default {
  props: {
    mode: {
      type: String,
      default: EDITOR_MODE.create,
    },
    post: {
      type: Object,
      default: () => {},
    },
    categoryItems: {
      type: Array,
      default: () => [],
    },
    tagItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      valid: true,
      id: null,
      title: '',
      slug: null,
      createTime: null,
      lastEditTime: null,
      published: false,
      publishedTime: null,
      category: null,
      tag: [],
      content: null,
    }
  },
  computed: {
    isCreate() {
      return this.mode === EDITOR_MODE.create
    },
    showLastEditTime() {
      if (!this.isCreate) return true
      return !!this.createTime
    },
    showpublishedTime() {
      if (this.publishedTime) return true
      if (!this.isCreate) return false
      return this.published && !!this.createTime
    },
  },
  created() {
    if (this.post) {
      this.id = this.post.id
      this.title = this.post.title
      this.slug = this.post.slug
      this.createTime = this.post.createTime
      this.lastEditTime = this.post.lastEditTime
      this.published = this.post.published
      this.publishedTime = this.post.publishedTime
      this.category = this.post.category
      this.tag = this.post.tag
      this.content = this.post.content
    }
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) return
      const post = {
        id: this.id,
        title: this.title,
        slug: this.slug,
        createTime: this.createTime,
        lastEditTime: this.lastEditTime,
        published: this.published,
        category: this.category,
        tag: this.tag,
        content: this.content,
      }
      this.$emit('submit', post)
    },
  },
}
</script>

<style lang="sass" scoped>
.content
  margin-bottom: 10px
  ::v-deep .v-note-wrapper
    z-index: 7
</style>
