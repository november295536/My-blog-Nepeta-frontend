import { postFormatter } from '~/tool/postFormatter'

export const EDITOR_MODE = {
  create: 'create',
  edit: 'edit',
}

export const state = () => ({
  editingPost: null,
  editorMode: EDITOR_MODE.create,
  editorInit: false,
  categoryItems: [],
  tagItems: [],
})

export const mutations = {
  setEditingPost(state, post) {
    state.editingPost = post
  },
  setEditorMode(state, mode) {
    state.editorMode = mode
  },
  setEditorInit(state, value) {
    state.editorInit = value
  },
  setCategoryItems(state, categories) {
    state.categoryItems = categories
  },
  setTagItems(state, tags) {
    state.tagItems = tags
  },
}

export const actions = {
  createPostInit({ commit }) {
    commit('setEditingPost', null)
    commit('setEditorMode', EDITOR_MODE.create)
    this.$router.push('/admin/edit')
  },
  editPostInit({ commit }, post) {
    post = postFormatter.dateToISOString(post)
    commit('setEditingPost', post)
    commit('setEditorMode', EDITOR_MODE.edit)
    this.$router.push('/admin/edit')
  },
  async fetchCategoryAndTag({ commit }) {
    const categories = await this.$repository.posts.getCategories()
    const tags = await this.$repository.posts.getTags()
    commit(
      'setCategoryItems',
      categories.map((category) => category.name)
    )
    commit(
      'setTagItems',
      tags.map((tag) => tag.name)
    )
    commit('setEditorInit', true)
  },
  async createPost({ dispatch }, post) {
    await this.$repository.posts.create(post)
    await dispatch('fetchCategoryAndTag')
    this.$router.push('/admin/dashboard')
  },
  async updatePost({ dispatch }, post) {
    const postData = {
      id: post.id,
      title: post.title,
      slug: post.slug,
      published: post.published,
      category: post.category,
      tag: post.tag,
      content: post.content,
    }
    await this.$repository.posts.update(postData)
    await dispatch('fetchCategoryAndTag')
    this.$router.push('/admin/dashboard')
  },
}
