<template lang="pug">
client-only
  .post-editor
    v-form(v-model='valid', ref='form')
      .title
        v-text-field#title(v-model='title', label='Title')
      .slug
        v-text-field(v-model='slug', label='Slug')
      .create-time
        date-picker(
          v-model='createTime',
          label='Create time',
          :rules='[(v) => !!v || "Date is required"]'
        )
      .lastEditTime(v-if='!!createTime')
        date-picker(
          v-model='lastEditTime',
          label='Last edit time',
          :rules='[(v) => !!v || "Date is required"]'
        )
      .published
        v-checkbox(v-model='published', label='Publish')
      .publishTime(v-if='!!createTime && published')
        date-picker(
          v-model='publishTime',
          label='Publish time',
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
export default {
  props: {
    post: {
      type: Object,
      default: () => {},
    },
    categoryItems: {
      type: Array,
      default: () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 113],
    },
    tagItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      valid: true,
      title: '',
      slug: null,
      createTime: null,
      lastEditTime: null,
      published: null,
      publishTime: null,
      category: null,
      tag: null,
      content: null,
    }
  },
  created() {
    if (this.post) {
      this.title = this.post.title
      this.slug = this.post.slug
      this.createTime = this.post.createTime
      this.lastEditTime = this.post.lastEditTime
      this.published = this.post.published
      this.publishTime = this.post.publishTime
      this.category = this.post.category
      this.tag = this.post.tag
    }
  },
  methods: {
    submit() {
      console.log(123)
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
