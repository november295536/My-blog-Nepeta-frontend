<template lang="pug">
.login
  v-card.login-form(:loading='loading')
    v-form(ref='form', v-model='valid')
      v-text-field.username(
        v-model='username',
        label='Username',
        :rules='usernameRules',
        required
      )
      v-text-field.password(
        v-model='password',
        :append-icon='showPassword ? "mdi-eye" : "mdi-eye-off"',
        label='Password',
        :rules='passwordRules',
        :type='showPassword ? "text" : "password"',
        @click:append='showPassword = !showPassword',
        required
      )
      v-btn.submit(@click='login') login
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loading: false,
      valid: false,
      username: '',
      password: '',
      showPassword: false,
      usernameRules: [(username) => !!username || 'required'],
      passwordRules: [(password) => !!password || 'required'],
    }
  },
  methods: {
    ...mapActions({
      loginAction: 'user/auth/login',
    }),
    async login() {
      try {
        this.loading = true
        const validate = this.$refs.form.validate()
        if (!validate) return
        const postData = {
          username: this.username,
          password: this.password,
        }
        await this.loginAction(postData)
      } finally {
        this.loading = false
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.login
  display: flex
  justify-content: center
.login-form
  flex: 1
  height: fit-content
  max-width: 480px
  padding: 5%
.password
  margin-bottom: 15px
.submit
  // margin-bottom: 5%
</style>
