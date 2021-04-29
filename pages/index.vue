<template lang="pug">
  .container
    .post-list
    .widget-area
      Profile
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.container
  display: flex
  height: fit-content
  margin-right: auto
  margin-left: auto
  @include screen-until($sm)
    display: block
.post-list
  flex: 3
  width: 100%
  padding: 0 15px
  // background: RED
.widget-area
  flex: 1
  // width: 390px
  padding: 0 15px
</style>
