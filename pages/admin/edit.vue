<template lang="pug">
.post-edit
  post-editor(v-if="isLogin", @submit='postSubmit')
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      isLogin: 'user/auth/isLogin',
    }),
  },
  mounted() {
    if (!this.isLogin) this.$router.push('/')
  },
  methods: {
    postSubmit(post) {
      console.log(post)
    },
  },
}
</script>
