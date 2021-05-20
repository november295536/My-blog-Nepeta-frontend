<template lang="pug">
.date-picker
  v-menu(
    v-model='open',
    :close-on-content-click='true',
    :nude-right='40',
    :z-index='100',
    transition='scale-transition',
    offset-y,
    min-width='auto'
  )
    template(v-slot:activator='{ on, attrs }')
      v-text-field(
        v-model='value',
        :label='label',
        prepend-icon='mdi-calendar',
        :rules='rules',
        :disabled='readonly',
        clearable,
        required,
        readonly,
        v-bind='attrs',
        v-on='on'
      )
    v-date-picker(:value='value', @input='datePicked')
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: undefined,
    },
    value: {
      type: String,
      default: undefined,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    datePicked(value) {
      this.$emit('input', value)
    },
  },
}
</script>
